import { Component } from "@angular/core";
import { ComponentDeepDiveHeaderComponent } from "./components/component-deep-dive-header/component-deep-dive-header.component";
import { ServerStatusComponent } from "./components/server-status/server-status.component";

@Component({
	selector: "app-deep-dive",
	standalone: true,
	imports: [ComponentDeepDiveHeaderComponent, ServerStatusComponent],
	templateUrl: "./deep-dive.component.html",
	styleUrl: "./deep-dive.component.scss"
})
export class DeepDiveComponent {}
