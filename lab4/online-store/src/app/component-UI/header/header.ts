import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navItems = [
    {label: 'Store', id: 0},
    {label: 'iPad', id: 1},
    {label: 'AirPods', id: 2},
    {label: 'iPhone', id: 3},
    {label: 'Watch', id: 4},
    {label: 'Sort', id: 5},
  ]
  
}