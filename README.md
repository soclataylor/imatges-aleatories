# 🎲 Imatges Aleatòries – Projecte Angular 20

Aquest projecte és una pràctica del curs de Juliol 2025 basada en Angular v20. L’objectiu és implementar una aplicació que gestioni la visualització d’imatges a partir de diverses funcionalitats, que s’han anat incorporant progressivament a través de diferents exercicis.

📌 El projecte es desenvolupa en **fases** (Exercicis 1 al 4), i cada fase afegeix nous requeriments i millores sobre la versió anterior.

## 👩‍🏫 Exercici proposat

### ✅ Exercici 1 – Aplicació bàsica amb login i selecció aleatòria
- Creació de components (`App`, `Header`)
- Data binding: interpolació, property binding, event binding, two-way binding
- Modificació del DOM amb `@if`, `@for`
- Selecció d’imatges aleatòries
- Login amb nom d’usuari

### ✅ Exercici 2 – Persistència amb LocalStorage
- Guarda i carrega imatges amb LocalStorage
- Evita la pèrdua de dades entre sessions
- Manteniment de la selecció de la imatge aleatòria

### ✅ Exercici 3 – Comunicació entre components
- Separació en components: `ImageList` (thumbnails i formulari) i `ImageDetail` (imatge gran)
- Comunicació pare-fill i fill-pare amb signals i `@input` / `@output`
- Afegir imatges amb formulari dinàmic
- Actualització del LocalStorage
- Organització modular del codi

### ✅ Exercici 4 – Aplicació multipàgina amb enrutament
- Enrutament entre pàgines amb `RouterModule`
- Precarrega d’imatges per defecte al LocalStorage
- Pàgina principal amb llistat d’imatges i selecció
- Pàgina per afegir noves imatges amb formulari complet (autors, data, títol, URL, explicació)
- Pàgina d’informació amb totes les dades de les imatges
- Capçalera amb menú de navegació
- Estils aplicats amb CSS personalitzat

---

## 🧱 Estructura funcional actual

- Aplicació sense login
- Llistat de miniatures d’imatges a l’esquerra
- Imatge destacada gran a la dreta
- Botó per seleccionar una imatge aleatòria
- Botó per afegir una nova imatge (navega a una altra pàgina)
- Pàgina d’informació detallada de totes les imatges

---

## 🧪 Tecnologies i funcionalitats utilitzades

- Angular v20
- Control Flow syntax (`@if`, `@else`, `@for`)
- Signals, InputSignal i OutputEmitterRef
- Formularis amb `ngModel`
- LocalStorage per persistència
- Gestió d’estat amb variables públiques (`isLoggedIn`, `username`, `imatgeActual`)
- Componentització (`HeaderComponent` separat)
- Enrutament
- HTML5 + CSS bàsic

---

## ▶️ Com executar el projecte

1. Clona aquest repositori:

   ```bash
   git clone https://github.com/soclataylor/imatges-aleatories.git
   cd imatges-aleatories
    ```
   
2. Instal·la les dependències:

    ```bash
    npm install
    ```

3. Executa el servidor de desenvolupament:

   ```bash
    ng serve
    ```

4. Obre el navegador a http://localhost:4200


👤 Autor  
Maria dels Àngels Cerveró Abelló  
Juliol 2025  
Implementat per @soclataylor
