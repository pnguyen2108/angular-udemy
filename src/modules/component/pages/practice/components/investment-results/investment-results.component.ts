import { Component, effect, inject } from "@angular/core";
import { AnnualDataService } from "../../services/annual-data.service";
import { IAnnualData } from "../../models/annual-data.model";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-investment-results",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./investment-results.component.html",
	styleUrl: "./investment-results.component.scss"
})
export class InvestmentResultsComponent {
	private _annualDataService = inject(AnnualDataService);

	annualData: IAnnualData[] = this._annualDataService.getAnnualData();

	constructor() {
		effect(() => {
			this.annualData = this._annualDataService.getAnnualData();
		});
	}

	resetTable() {
		this._annualDataService.setAnnualData = [];
	}
}
