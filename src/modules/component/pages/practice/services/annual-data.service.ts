import { Injectable, signal, WritableSignal } from "@angular/core";
import { IAnnualData } from "../models/annual-data.model";

@Injectable({
	providedIn: "root"
})
export class AnnualDataService {
	annualData: WritableSignal<IAnnualData[]> = signal([]);

	constructor() {}

	get getAnnualData() {
		return this.annualData.asReadonly();
	}

	set setAnnualData(value: IAnnualData[]) {
		this.annualData.set(value);
	}
}
