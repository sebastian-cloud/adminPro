import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSubs!: Subscription;

  constructor() {

    // this.obsFunction()
    // .pipe(
    //   map( valor => valor ),
    //   filter( valor => ( valor % 2 ) === 0 ? true : false ),
    //   take(5),
    //   retry()
    // )
    // .subscribe(
    //   valor => console.log('Subs:',valor),
    //   error => console.warn('Error: ',error),
    //   () => console.info('Obs terminado')
    // );

    this.intervalSubs = this.retornaObservable()
          .subscribe( console.log );

  }
  ngOnDestroy(): void {
    
    this.intervalSubs.unsubscribe();

  }

  retornaObservable(): Observable<number> {
    
    return interval( 100 )
            .pipe(
              //take(10),
              map( valor => valor + 1),
              filter( valor => ( valor % 2 === 0 ) ? true : false )
            );

  }
  
  obsFunction(): Observable<number> {

    return new Observable( observer => {

      let i = 0;

      const intervalo = setInterval( () => {

        i++;

        observer.next( i );

        if( i === 10 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        // if( i === 2 ) {
        //   clearInterval( intervalo );
        //   observer.error('Error');
        // }
        
      }, 100 );

    } );

  }

}
