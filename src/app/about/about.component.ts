import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule
  ],
  //templateUrl: './about.component.html',
  template: `
  <h1 [ngStyle] = "{
    color: isActive ? 'red' : 'black',
  }">
    {{ about }}
  </h1>
  <ul>
    <li *ngFor="let infoAlamat of alamat">
    {{ infoAlamat }}
    </li>
  </ul>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  about = 'Dee ID';
  alamat = ["Kota Kotamobagu", "No Telp: 08123456789"];

  isActive: boolean = false;
}
