import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AnnualDataService } from "../../services/annual-data.service";

@Component({
	selector: "app-component-user-input",
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: "./component-user-input.component.html",
	styleUrl: "./component-user-input.component.scss"
})
export class ComponentUserInputComponent {
	private _fb = inject(FormBuilder);

	userInputForm: FormGroup = this._fb.group({
		initialInvestment: [null, [Validators.required]],
		annualInvestment: [null, [Validators.required]],
		expectedReturn: [null, [Validators.required]],
		duration: [null, [Validators.required]]
	});

	private _annualDataService = inject(AnnualDataService);

	constructor() {}

	onSubmitForm() {
		if (!this.userInputForm.valid) {
			return;
		}

		const { initialInvestment, annualInvestment, expectedReturn, duration } =
			this.userInputForm.getRawValue();

		let valueEndOfYear = initialInvestment;

		const annualData = this._annualDataService.getAnnualData();

		for (let i = 0; i < duration; i++) {
			const year = i + 1;

			const interestEarnedInYear = valueEndOfYear * (expectedReturn / 100);

			valueEndOfYear += interestEarnedInYear + annualInvestment;

			const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment;

			const totalAmountInvested = initialInvestment + annualInvestment * year;

			annualData.push({
				year,
				interestEarnedInYear,
				valueEndOfYear,
				annualInvestment,
				totalInterest,
				totalAmountInvested
			});

			this._annualDataService.setAnnualData = annualData;
		}

		this.userInputForm.reset();
	}
}
