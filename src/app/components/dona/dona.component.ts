import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements AfterViewInit {

  @Input() title: string = 'Sin título';
  
  @Input('labels') doughnutChartLabels: Label[] = [ 'Label 1', 'Label 2', 'Label 3' ];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] }
  ];

  constructor() { }

  ngAfterViewInit(): void {
    
    // this.doughnutChartLabels = this.labels;
    // this.doughnutChartData = this.data;

  }

}
