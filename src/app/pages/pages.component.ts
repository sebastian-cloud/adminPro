import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customFunctionInit():void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  anio: number = new Date().getFullYear();
  
  constructor( private SettingsService: SettingsService ) { }

  ngOnInit(): void {
    customFunctionInit();
  }

}
