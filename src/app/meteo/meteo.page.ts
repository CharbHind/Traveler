import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeatherApiService} from '../services/weather-api.service';


@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
  data:any;
  today = Date.now();
  constructor(private weather:WeatherApiService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.weather.getWeather()
    .subscribe(data=>{
      this.data=data;
    },err=>{
      console.log(err);
    });
  }

}
