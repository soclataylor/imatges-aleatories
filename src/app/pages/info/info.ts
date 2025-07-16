import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.css'
})
export class Info {


  /*Creem una variable que emmagatzemarà les dades dels gossos del LocalStorage:*/
  public imatgesGossos: { autors: string; data: string; expl: string; url: string; titol: string }[] = [];
  
    
  constructor() /* Haurem de carregar les imatges del LocalStorage en una variable per poder-hi accedir des de la vista:*/
  {
    //Primer carreguem les dades del localStorage:
    const dadesGossos = localStorage.getItem('imatges');

    if(dadesGossos)//comprovem si hi ha dades de gossos al LocalStorage
    {
      this.imatgesGossos = JSON.parse(dadesGossos); //convertim el string a un objecte JSON
    }
  }
}
