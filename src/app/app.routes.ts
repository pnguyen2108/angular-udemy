import { Routes } from "@angular/router";
import { PracticeComponent } from "../modules/component/pages/practice/practice.component";
import { DeepDiveComponent } from "../modules/component/pages/deep-dive/deep-dive.component";
import { ComponentComponent } from "../modules/component/component.component";

export const routes: Routes = [
	{
		path: "component",
		loadChildren: () =>
			import("../modules/component/component.route").then(
				componentRoute => componentRoute.componentRoutes
			)
	}
];
