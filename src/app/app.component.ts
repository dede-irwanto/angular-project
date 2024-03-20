import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from './contact/contact.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CopyrightComponent } from "./copyright/copyright.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        AboutComponent,
        ContactComponent,
        MatButtonModule,
        MatToolbarModule,
        RouterLink,
        CopyrightComponent
    ]
})
export class AppComponent {
  title = 'angular-project';
  hakcipta: string = "Copyright Dede Irwanto";
}
