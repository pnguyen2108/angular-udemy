import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
	selector: "app-component-header",
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: "./component-header.component.html",
	styleUrl: "./component-header.component.scss"
})
export class ComponentHeaderComponent {}
