import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private weatherService: WeatherService) {

  }
  cityName: string = 'RockVille';
  weatherData? : WeatherData

  ngOnInit(): void {
    this.getWeather(this.cityName)
    this.cityName= ''
  }

  onSubmit() {
    this.getWeather(this.cityName)
    this.cityName= ''
  }

  private getWeather(ctName: string) {
    this.weatherService.getWeatherData(ctName)
    .subscribe({
      next: (res) => {
        this.weatherData = res
      }
    })
  }
  
}
