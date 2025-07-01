# 🎲 Imatges Aleatòries – Projecte Angular 20

Aquest projecte és una pràctica del curs de Juliol 2025 basada en Angular v20. L’objectiu és implementar una aplicació que gestioni la selecció aleatòria d’imatges després d’identificar-se amb un nom d’usuari.

## 👩‍🏫 Exercici proposat

Implementar un gestor d’imatges aleatòries utilitzant Angular 20 que inclogui:

- ✅ Creació de components (`App`, `Header`)
- ✅ Data binding (interpolació, property binding, event binding, two-way binding)
- ✅ Modificació del DOM mitjançant Control Flow syntax (`@if`, `@for`)

---

## 🧱 Estructura funcional

### 🧑‍💻 Abans de fer login
- Es mostra un input per escriure el nom d’usuari.
- Un botó permet iniciar la sessió.

### 👋 Després de fer login
- Es mostra un missatge de benvinguda.
- Una banda lateral conté miniatures d’imatges fixes.
- Hi ha un botó **Seleccionar** que mostra una imatge aleatòria en gran a la dreta.

---

## 🧪 Tecnologies i funcionalitats utilitzades

- Angular v20
- Control Flow syntax (`@if`, `@else`, `@for`)
- Formularis amb `ngModel`
- Gestió d’estat amb variables públiques (`isLoggedIn`, `username`, `imatgeActual`)
- Componentització (`HeaderComponent` separat)
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


📁 Autor
Maria dels Àngels Cerveró Abelló
Exercici 1 – Juliol 2025
Implementat per @soclataylor
