import { Component } from "@angular/core";
import { ComponentHeaderComponent } from "./components/component-header/component-header.component";
import { ComponentUserInputComponent } from "./components/component-user-input/component-user-input.component";
import { InvestmentResultsComponent } from "./components/investment-results/investment-results.component";

@Component({
	selector: "app-practice",
	standalone: true,
	imports: [ComponentHeaderComponent, ComponentUserInputComponent, InvestmentResultsComponent],
	templateUrl: "./practice.component.html",
	styleUrl: "./practice.component.scss"
})
export class PracticeComponent {}
