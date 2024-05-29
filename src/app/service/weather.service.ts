import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey='f002c35501msh0848607b5d48257p15aa70jsnd3bf3085cf45';
  private apiUrl='https://the-weather-api.p.rapidapi.com/api/weather/toronto';
  constructor(private http: HttpClient) { }

  searchWeatherByCity(city: string): Observable<any>{
    const headers = new HttpHeaders()
      .set("X-RapidAPI-Key", this.apiKey)
      .set("X-RapidAPI-Host", 'the-weather-api.p.rapidapi.com')

    const options= {headers};
    return this.http.get(`${this.apiUrl}/${city}`, options)
  }
}
