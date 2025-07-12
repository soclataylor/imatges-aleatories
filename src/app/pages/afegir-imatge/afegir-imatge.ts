import { Component, output, OutputEmitterRef, signal } from '@angular/core';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-afegir-imatge',
  imports: [FormsModule],
  templateUrl: './afegir-imatge.html',
  styleUrl: './afegir-imatge.css'
})
export class AfegirImatge {

  /*Variables (signals) per recollir les dades del formulari*/
  public autorsImatge = signal('');
  public dataImatge = signal('');
  public explicacioImatge = signal('');
  public urlImatge = signal('');
  public titolImatge = signal('');

  //OUTPUT: EMET DADES AL PARE (App) - per emetre la imatge que ha entrat l'usuari al formulari;
  //public imatgeNova: OutputEmitterRef<{autors:string, data:string, expl: string, url:string, titol:string}> = output<{autors:string, data:string, expl: string, url:string, titol:string}>();

  public afegirImatge(): void
  {
    //Recuperarem les imatges actuals del LocalStorage:
    const dadesGuardades = localStorage.getItem('imatges');

    //Si hi ha dades, convertim el JSON en un array Javascript, si no n’hi ha, inicialitzem a un array buit.
    const imatgesArray = dadesGuardades ? JSON.parse(dadesGuardades) : [];

    //Fem un push de la nova imatge a aquest darrer array.
    imatgesArray.push({
      autors: this.autorsImatge(),
      data: this.dataImatge(),
      expl: this.explicacioImatge(),
      url: this.urlImatge(),
      titol: this.titolImatge()
    })

    console.log(imatgesArray);

    //Actualitzem el localStorage
    localStorage.setItem('imatges', JSON.stringify(imatgesArray));

    //Netegem els camps del formulari després d'afegir la imatge
    this.autorsImatge.set('');
    this.dataImatge.set('');
    this.explicacioImatge.set('');
    this.urlImatge.set('');
    this.titolImatge.set('');

    //Tornem a la pàgina principal
  }

}
