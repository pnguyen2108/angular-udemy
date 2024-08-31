import { Routes } from "@angular/router";
import { ComponentComponent } from "./component.component";
import { PracticeComponent } from "./pages/practice/practice.component";
import { DeepDiveComponent } from "./pages/deep-dive/deep-dive.component";

export const componentRoutes: Routes = [
	{
		path: "",
		component: ComponentComponent,
		children: [
			{ path: "", redirectTo: "practice", pathMatch: "full" },
			{ path: "practice", component: PracticeComponent },
			{ path: "deep-dive", component: DeepDiveComponent }
		]
	}
];
