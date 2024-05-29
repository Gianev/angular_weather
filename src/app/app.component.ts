import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TempcardComponent } from './tempcard/tempcard.component';
import { WeatherService } from './service/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TempcardComponent, HttpClientModule],
  template: `
 <div class="search-container">
  <input type="text" class="search-input" placeholder="Search City" #search>
  <button class="search-button" (click)="searchcity(search.value)">Search</button>
  
</div>


<div class="content">
  <div class="row">
      <div class="image-container">
        <img src="../img.jpg" alt="" class="section-image">
      </div>
      <div class="temperature">
        <app-tempcard></app-tempcard>
      </div>
  </div>

  <div class="row">
    <div class="section-2">
      <div class="top-info">
        <p>Expected Temperature: Day 32 C & Night 20 C</p>
      </div>

      <div class="bottom-info">
        <div class="info-box">
          <p>Humidity 30%</p>
        </div>
        <div class="info-box">
          <p>Wind Speed: 7 KM/H</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  weatherData: any;
  query: string = 'New York';  // Example city name
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.searchcity(this.query);
  }

  searchcity(text: string) {
    console.log(text)
    
  }
 
  

}
