import { Component } from '@angular/core';
import { signal, Signal, input, InputSignal,WritableSignal } from '@angular/core';

@Component({
  selector: 'app-image-detail',
  imports: [],
  templateUrl: './image-detail.html',
  styleUrl: './image-detail.css'
})
export class ImageDetail {

  //Input Signal per rebre el llistat de gossos: ARA JA NO CAL
  /*public gossos: InputSignal<{ rutaImatge: string; titolImatge: string; }[]> =
    input([] as { rutaImatge: string; titolImatge: string; }[]);*/


  //Input Signal per rebre la imatge actual seleccionada:
  public imatge: InputSignal<string> = input('');


}
