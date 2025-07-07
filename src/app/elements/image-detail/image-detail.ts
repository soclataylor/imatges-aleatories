import { Component } from '@angular/core';
import { signal, Signal, input, InputSignal,WritableSignal } from '@angular/core';

@Component({
  selector: 'app-image-detail',
  imports: [],
  templateUrl: './image-detail.html',
  styleUrl: './image-detail.css'
})
export class ImageDetail {

  //Input Signal per rebre el llistat de gossos: 
  public gossos: InputSignal<{ rutaImatge: string; titolImatge: string; }[]> =
    input([] as { rutaImatge: string; titolImatge: string; }[]);

    
}
