import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  @Input() myProducts: any[] = [];
}
