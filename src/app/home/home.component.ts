import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productBuku: Array<String> = ['Buku A', 'Buku B', 'Buku C', 'Buku D', 'Buku E', 'Buku F'];

  objBuku: Array<any> = [
    {id: 1, name: 'Buku A', price: 10000},
    {id: 2, name: 'Buku B', price: 20000},
    {id: 3, name: 'Buku C', price: 30000},
    {id: 4, name: 'Buku D', price: 40000},
    {id: 5, name: 'Buku E', price: 50000},
  ];

  tambahBuku() {
    this.objBuku.push({id: 6, name: 'Buku F', price: 60000});
  }

  hapusBuku() {
    this.objBuku.pop();
  }
}
