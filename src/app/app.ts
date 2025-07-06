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
  public gossos: Signal<string[]> = signal(["img/cocker.jpeg", "img/foxterrier.jpg", "img/schnauzer.jpeg", "img/teckel.jpeg"]);

  //public imatgeActual: string = ''; //guardarem la imatge que es mostrarà //ho passem a WritableSignal7
  public imatgeActual: WritableSignal<string> = signal('');

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
    const randomIndex = Math.floor(Math.random() * this.gossos.length);
    //Posem el valor de la imatge actual a l'índex aleatori generat
    
    //this.imatgeActual = this.gossos[randomIndex];
    //Ho passem a signal:
    //No podem accedir al signal com si fos un array,
    //sinó que hem d'utilitzar el mètode get() per obtenir el valor actual del signal
    this.imatgeActual.set(this.gossos()[randomIndex]);
  }

  public onImageClick(index: number) //li passem l'índex de la imatge clicada
  {
    //Es mostrarà amb gros la imatge que cliqui l'usuari:
    //console.log('Has clicat sobre la imatge: número' + index);
    //this.imatgeActual = this.gossos[index];
    //Ho passem a signal:
    this.imatgeActual.set(this.gossos()[index]);
  }
}
