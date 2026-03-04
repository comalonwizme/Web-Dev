import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  @Input() myProducts: any[] = [];
  getWhatsAppLink(link: string): string {
    const message = `Check out this product: ${link}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  getTelegramLink(link: string, name: string): string {
    return `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(name)}`;
  }
}
