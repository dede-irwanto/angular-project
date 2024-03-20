import { Component, Input } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [
    MatToolbar
  ],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss'
})
export class CopyrightComponent {
  @Input() hakcipta: string;
}
