import { ReservedOrUserEventNames } from './../../node_modules/@socket.io/component-emitter/lib/esm/index.d';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'imatges-aleatories';

  public username: string= '';
  public isLoggedIn: boolean = false;//Per controlar si l'usuari està loguejat

  public gossos = ["img/cocker.jpeg", "img/foxterrier.jpg",
                    "img/schnauzer.jpeg", "img/teckel.jpeg"];

  public imatgeActual: string = ''; //guardarem la imatge que es mostrarà

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
    this.username = username;
  }

  public login(): void
  {
    if (this.username.trim() !== '')
    {
      this.isLoggedIn = true;
    }
  }

  public logout()
  {
    this.isLoggedIn = false;
    this.username = '';
  }

  public imatgeAleatoria()
  {
    //Hem de generar un número aleatori entre 0 i la mida de l'array - 1
    const randomIndex = Math.floor(Math.random() * this.gossos.length);
    //Posem el valor de la imatge actual a l'índex aleatori generat
   this.imatgeActual = this.gossos[randomIndex];
  }

  public onImageClick(index: number) //li passem l'índex de la imatge clicada
  {
    //Es mostrarà amb gros la imatge que cliqui l'usuari:
    //console.log('Has clicat sobre la imatge: número' + index);
    this.imatgeActual = this.gossos[index];
  }
}
