import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-component",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./component.component.html",
	styleUrl: "./component.component.scss"
})
export class ComponentComponent {}
