import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _linkTheme = document.querySelector('#theme');
  private _links!: NodeListOf<Element>;

  constructor() {
    
    const theme = localStorage.getItem( 'theme' ) || '';
    this._linkTheme?.setAttribute( 'href', theme );
    
  }

  changeTheme( theme: string ) {

    const url = `./assets/css/colors/${ theme }.css`;

    this._linkTheme?.setAttribute( 'href', url );
    localStorage.setItem( 'theme', url );

    this.checkCurrentTheme();

  }

  checkCurrentTheme() {

    this._links = document.querySelectorAll('.selector');

    this._links.forEach( item => {
      
      item.classList.remove( 'working' );
      const btnTheme = item.getAttribute( 'data-theme' );
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this._linkTheme?.getAttribute('href');

      if( btnThemeUrl === currentTheme ) {

        item.classList.add('working');

      }

    } );

  }

}
