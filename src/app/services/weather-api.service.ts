import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  apiKey = '5652a13f3b85f4ea9bbc2b5104a60c21';
  constructor(private http:HttpClient) { }
  getWeather(){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=taza,MA&appid="+this.apiKey+"&units=metric");
  }
}