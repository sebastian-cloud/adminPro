import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  labels1: string[] = ['Pan', 'Refresco', 'Tacos'];

  data1 = [
    [10, 15, 40]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
