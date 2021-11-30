import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso: number = 40;
  @Input('clase') btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  get getBtnClass() {
    return `btn ${ this.btnClass }`;
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  cambiarValor(valor: number) {

    if( this.progreso >= 100 && valor >= 0 ) {
      this.valorSalida.emit(100);
      return;
    }
    
    if( this.progreso <= 0 && valor < 0 ) {
      this.valorSalida.emit(0);
      return;
    }

    this.progreso += valor;
    this.valorSalida.emit( this.progreso );

  }

  onChange( valor: number ) {

    if( valor >= 100 ) {
      this.progreso = 100;
    } else if( valor <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }

    this.valorSalida.emit( this.progreso );

  }

}
