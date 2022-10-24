import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const baseUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`
    return this.http.get<WeatherData>(baseUrl,{
      headers: new HttpHeaders()
      .set(environment.APIKey, environment.APIKeyValue)
      .set(environment.APIHost, environment.APIHostValue)
    })
  }
}
