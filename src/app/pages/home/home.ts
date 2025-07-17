import { Component, signal, WritableSignal } from '@angular/core';
import { ImageDetail } from '../../elements/image-detail/image-detail';
import { ImageList } from '../../elements/image-list/image-list';

@Component({
  selector: 'app-home',
  imports: [ImageDetail, ImageList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  public gossos: WritableSignal<{ autors:string, data:string, expl: string, url:string, titol:string }[]> = signal([
  { autors:"Mariona Batalla Taylor", data: "06/03/1985", expl: "El Schnauzer (pronunciat [ʃnaʊtsər]) és una raça de gos que es va originar a Alemanya durant els segles XIV i XVI.[1][2][3] El seu nom prové de la paraula alemanya Schnauzer, que s'usa per designar el \"morro\", a causa del característic morro pelut que distingeix a aquesta raça de gos", url: "img/schnauzer.jpeg", titol: "Schnauzer" },
  { autors:"Mariona Batalla Taylor", data: "06/03/1985", expl: "El cocker spaniel americà (en anglès, American Cocker Spaniel) és una raça de gos dels Estats Units, originada a partir d'exemplars del cocker spaniel anglès portats el 1800 des de la Gran Bretanya. Des dels anys 1930 la varietat nord-americana va arribar a ser tan diferent de la britànica que va ser considerada, oficialment, un raça diferent el 1946", url: "img/cocker.jpeg", titol: "Cocker" },
  { autors:"Mariona Batalla Taylor", data: "06/03/1985", expl: "El Fox terrier és una raça de gos que era usada antigament per fer sortir les guineus dels seus amagatalls quan eren perseguides per gossos de rastreig. Actualment aquest Terrier s'utilitza com animal de companyia. Hi ha dos tipus de Fox terrier, el Fox terrier de pèl dur (filferro) i el Fox terrier de pèl llis. Tots dos es van desenvolupar a Anglaterra fa uns dos-cents anys i probablement descendeixin de diferents ancestres.", url: "img/foxterrier.jpg", titol: "Fox Terrier" },
  { autors:"Mariona Batalla Taylor", data: "06/03/1985", expl: "El dachshund (\"gos teixó\" en alemany), també dit teckel, dackel o gos salsitxa, és una raça de gos. Té tres varietats: de pèl curt, de pèl dur i de pèl llarg. El Club més antic per a la criatura del Teckel és el Deutsche Teckelklub i.V. fundat el 1888.", url: "img/teckel.jpeg", titol: "Teckel" }
  ]);

  public imatgeActual: WritableSignal<{ autors: string; data: string; expl: string; url: string; titol: string }> = signal({
    autors: '',
    data: '',
    expl: '',
    url: '',
    titol: ''
  });

  
  //CONSTRUCTOR per inicialitzar l'aplicació:
  //inicialitzarem les dades dels gossos
  constructor()
  {
    //Primer mirem si hi ha dades carregades a localStorage, per tal de no sobreescriure-les:
    const dadesGossos = localStorage.getItem('imatges'); //ho guardem en una constant

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
      localStorage.setItem('imatges', JSON.stringify(this.gossos()));
    }

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
    this.imatgeActual.set(arrayGossos[randomIndex]);


    //console.log('Random seleccionat:', arrayGossos[randomIndex]);
    //console.log('Actual:', this.imatgeActual());
  }

  public actualitzarImatge(imatge: { autors:string, data:string, expl: string, url:string, titol:string }): void
  //Actualitza la imatge actual amb la imatge seleccionada
  {
    //Es mostrarà amb gros la imatge que cliqui l'usuari:
    //console.log('Has clicat sobre la imatge: número' + index);
    //this.imatgeActual = this.gossos[index];
    //Ho passem a signal i accedim al valor de la imatge
    this.imatgeActual.set(imatge);
  }

  //VE DEL FILL afegir-imatges.ts
  public afegirImatgeDelFormulari(imatge: { autors:string, data:string, expl: string, url:string, titol:string }): void
  //Aquesta funció s'executarà quan l'usuari prem el botó d'afegir imatge
  //s'actualitzarà l'array de gossos i també el localStorage
  {
    this.gossos.update(g => [...g, imatge]); //Afegim la nova imatge a l'array de gossos
    localStorage.setItem('Imatges', JSON.stringify(this.gossos())); //Actualitzem el localStorage
  }

  public buidarImatgeActual(): void
  {
    console.log("Pare buidant la imatge actual");
    this.imatgeActual.set({
      autors: '',
      data: '',
      expl: '',
      url: '',
      titol: ''
    })
  }

}
