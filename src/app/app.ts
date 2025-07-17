import { ReservedOrUserEventNames } from './../../node_modules/@socket.io/component-emitter/lib/esm/index.d';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { signal, WritableSignal } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Info } from './pages/info/info';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    FormsModule
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'imatges-aleatories';

  
}
