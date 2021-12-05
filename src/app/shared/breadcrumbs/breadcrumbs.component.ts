import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  titulo: string = '';
  public tituloSubs$!: Subscription;

  constructor( private router: Router ) {

    this.tituloSubs$ = this.getTitulo() 
                          .subscribe( data => {
                            this.titulo = data.titulo;
                            document.title = `Admin PRO - ${ data.titulo }`;
                          } );;

  }

  ngOnDestroy(): void {
    
    this.tituloSubs$.unsubscribe();

  }

  getTitulo() {
    
    return this.router.events
      .pipe(
        filter<any>( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event: ActivationEnd) => event.snapshot.data )
      )

  }

}
