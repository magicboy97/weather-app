import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const baseUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '93ed641bbbmsh5fbdca42ad17e6bp133f4bjsnfa8985b04a3f',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    return this.http.get<WeatherData>(baseUrl,options)
  }
}
