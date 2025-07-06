import { ReservedOrUserEventNames } from './../../node_modules/@socket.io/component-emitter/lib/esm/index.d';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { signal, Signal, WritableSignal } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'imatges-aleatories';

  //public username: string= ''; //ho passem a WritableSignal
  public username: WritableSignal<string> = signal('');

  //public isLoggedIn: boolean = false;//Per controlar si l'usuari està loguejat//ho passem a WritableSignal
  public isLoggedIn: WritableSignal<boolean> = signal(false);

  /*public gossos = ["img/cocker.jpeg", "img/foxterrier.jpg",
                    "img/schnauzer.jpeg", "img/teckel.jpeg"];*///ho passem a Signal
  //public gossos: WritableSignal<string[]> = signal(
    //["img/cocker.jpeg", "img/foxterrier.jpg", "img/schnauzer.jpeg", "img/teckel.jpeg"]);

  //Com que l'usuari ens entrarà la ruta de la imatge i la descripció, modifiquem l'array de gossos
  //per tal que les imatges tinguin tan la ruta com el títol:
  public gossos: WritableSignal<{ img: string; title: string }[]> = signal([
  /*{ img: "img/cocker.jpeg", title: "Cocker" },
  { img: "img/foxterrier.jpg", title: "Fox Terrier" },
  { img: "img/schnauzer.jpeg", title: "Schnauzer" },
  { img: "img/teckel.jpeg", title: "Teckel" }*/
]);

  //public imatgeActual: string = ''; //guardarem la imatge que es mostrarà //ho passem a WritableSignal7
  public imatgeActual: WritableSignal<string> = signal('');

  //Variables per afegir noves imatges per mitjà del formulari:
  public rutaImatge: string = '';
  public titolImatge: string = '';

  //CONSTRUCTOR per inicialitzar l'aplicació:
  //inicialitzarem les dades dels gossos
  constructor()
  {
    //Primer mirem si hi ha dades carregades a localStorage, per tal de no sobreescriure-les:
    const dadesGossos = localStorage.getItem('Imatges'); //ho guardem en una constant

    if(dadesGossos) //si hi ha dades a localStorage
    { 
      //Les dades que ens retorna localStorage són un string, per tant les hem de convertir a JSON i després a un array
      //Per això fem un parse:
      this.gossos.set(JSON.parse(dadesGossos));
    }

    else //no hi ha dades emmagatzemades al localStorage
    {
      //Guardem les gossos a localStorage per persistir les dades
      //Li posem de nom 'Imatges' i les convertim a JSON i després a string perquè localStorage només pot guardar strings
      localStorage.setItem('Imatges', JSON.stringify(this.gossos()));
    }
    
  }
  
  // GETTER per poder recuperar el nom d'usuari:
  //(no cal si l'atribut és públic)
  get getusername()
  {
    return this.username;
  }

  // SETTER per poder establir el nom d'usuari:
  //(no cal si l'atribut és públic)
  public setUsername(username: string)
  {
    //this.username = username;
    //Ho passem a signal:
    this.username.set(username);
  }

  public login(): void
  {
    //if (this.username.trim() !== '')
    //Ho passem a signal:
    if (this.username().trim() !== '')
    {
      //this.isLoggedIn = true;
      //Ho passem a signal:
      this.isLoggedIn.set(true);
    }
  }

  public logout()
  {
    //this.isLoggedIn = false;
    //ho passem a signal:
    this.isLoggedIn.set(false);
    //ho passem a signal:
    //this.username = '';
    this.username.set('');
  }

  public imatgeAleatoria()
  {
    //Hem de generar un número aleatori entre 0 i la mida de l'array - 1
    //const randomIndex = Math.floor(Math.random() * this.gossos().length);
    //Ara no podem accedir a .lth perquè gossos és un signal,
    //sinó que hem d'utilitzar el mètode get() per obtenir el valor

    //Primer recuperem l'array de gossos com a variable
    const arrayGossos = this.gossos();

    //Generem un índex aleatori:
    const randomIndex = Math.floor(Math.random() * arrayGossos.length);

    //Posem el valor de la imatge actual a l'índex aleatori generat
    this.imatgeActual.set(arrayGossos[randomIndex].img);


    console.log('Random seleccionat:', arrayGossos[randomIndex]);
    console.log('Actual:', this.imatgeActual());
  }

  public onImageClick(index: number) //li passem l'índex de la imatge clicada
  {
    //Es mostrarà amb gros la imatge que cliqui l'usuari:
    //console.log('Has clicat sobre la imatge: número' + index);
    //this.imatgeActual = this.gossos[index];
    //Ho passem a signal i accedim al valor de la imatge
    this.imatgeActual.set(this.gossos()[index].img);
  }

  public afegirImatge()
  {
    //Afegim la nova imatge a l'array de gossos:
    //Sobre un signal no podem fer un push directament
    //Però sí que podem fer un update que ens permet modificar el valor del signal
    this.gossos.update(g => [...g, { 
      img: this.rutaImatge,  //Li passem cada valor a cada item de la imatge
      title: this.titolImatge 
    }]);

    //Ho passem a localStorage:
    localStorage.setItem('Imatges', JSON.stringify(this.gossos()));

    //Reinicialitzem la ruta i el títol de la imatge:
    this.rutaImatge = '';
    this.titolImatge = '';
  }
}
