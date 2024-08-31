import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
	selector: "app-component-deep-dive-header",
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: "./component-deep-dive-header.component.html",
	styleUrl: "./component-deep-dive-header.component.scss"
})
export class ComponentDeepDiveHeaderComponent {}
