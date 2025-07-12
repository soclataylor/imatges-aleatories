import { Component } from '@angular/core';
import { signal, Signal, input, InputSignal,WritableSignal, output, OutputEmitterRef} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-list',
  imports: [FormsModule],
  templateUrl: './image-list.html',
  styleUrl: './image-list.css'
})
export class ImageList {

  //INPUT: REBRE DADES DEL PARE (app) - per rebre els gossos
  //creem un inputSignal per poder rebre les dades dels gossos del component pare (app)
  //està dient: "rep un input que és una llista d’objectes amb img i title"
  //L'inicialitzem amb un array buit
public gossos: InputSignal<{ autors: string; data: string; expl: string; url: string; titol: string; }[]> =
  input<{ autors: string; data: string; expl: string; url: string; titol: string; }[]>([]);



  //OUTPUT: EMET DADES AL PARE (app) - per emetre la imatge seleccionada
  //creem un outputEmitterRef per poder emetre les dades de la imatge seleccionada per l'usuari en fer clic
  //està dient: "emet un objecte amb img i title"
  //Aquest output serà escoltat pel component pare (app) per tal de mostrar la imatge seleccionada

  public imatgeSelec: OutputEmitterRef<{ autors: string; data: string; expl: string; url: string; titol: string; }> = output<{ autors: string; data: string; expl: string; url: string; titol: string; }>();


  //OUTPUT: EMET DADES AL PARE (App) - per emetre la imatge que ha entrat l'usuari al formulari;
  public imatgeNova: OutputEmitterRef<{ autors: string; data: string; expl: string; url: string; titol: string; }> = output<{ autors: string; data: string; expl: string; url: string; titol: string; }>();


  public rutaImatge = signal(''); //per rebre la ruta de la imatge que l'usuari vol afegir
  public titolImatge = signal(''); //per rebre el títol de la imatge que l'usuari vol afegir

  //Quan l'usuari fa clic a una imatge:
  public onImageClick(index: number):void
  {
    //quan l'usuari fa clic a una imatge, emet les dades de la imatge seleccionada
    //per tal que el component pare (app) pugui mostrar la imatge seleccionada
    this.imatgeSelec.emit(this.gossos()[index]);
  }

  //EXERCICI 4: això ho farà a una altra pàgina (un altre component)
  /*public afegirImatge():void
  {
    //Quan l'usuari prem el botó d'afegir imatge, emet les dades de la nova imatge
    //per tal que el component pare (app) pugui afegir la nova imatge a la llista de gossos
    this.imatgeNova.emit({img: this.rutaImatge(), title: this.titolImatge()});

    //Netegem els camps del formulari després d'afegir la imatge
    this.rutaImatge.set('');
    this.titolImatge.set('');
  }*/

  public imatgeAleatoria(): void
  {
    //Generem un número aleatori per seleccionar una imatge aleatòria de l'array de gossos
    const randomIndex = Math.floor(Math.random() * this.gossos().length);

    //Emetem la imatge aleatòria seleccionada
    this.imatgeSelec.emit(this.gossos()[randomIndex]);
  }
}
