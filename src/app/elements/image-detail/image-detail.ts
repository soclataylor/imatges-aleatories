import { Component } from '@angular/core';
import { signal, Signal, input, InputSignal,WritableSignal, output, OutputEmitterRef } from '@angular/core';

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
  public imatge: InputSignal<{ autors: string; data: string; expl: string; url: string; titol: string; }> = input({ autors: '', data: '', expl: '', url: '', titol: '' });

  //Output per avisar al pare que ha de tancar la imatge (resetejar els valors de la imatge actual):
  public tancaImatge: OutputEmitterRef<void> = output();

  public tancarImatge(): void
  {
    //Emetem l'event per tancar la imatge perquè el pare pugui resetar els valors de la imatge actual:
    this.tancaImatge.emit();
    console.log("Fill rep l'esdeveniment per tancar la imatge");
  }
}
