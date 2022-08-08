import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lat: number = 41.6370563;
  lng: number = -0.8998669;
  zoom: number = 14;
}
