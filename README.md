# 🚀 Speed Hire

**Speed Hire** es un juego web interactivo desarrollado con **[Angular CLI](https://github.com/angular/angular-cli) version 19.2.4**, **TailwindCSS** y **DaisyUI**, donde el usuario debe seleccionar rápidamente al mejor candidato (el CV real) entre varias opciones falsas antes de que se acabe el tiempo.



## 🎮 ¿Cómo funciona?

1. Al comenzar el juego, se muestran varios **CVs generados dinámicamente**.
2. El jugador tiene un **tiempo limitado (countdown)** para elegir.
3. Si selecciona correctamente al candidato real:
   - Aparece una pantalla de **felicitación con confeti animado** 🎉  
   - Puede **descargar el CV real en PDF** o **ver el código fuente en GitHub**.
4. Si se equivoca, aparece una pantalla de **“Ups, inténtalo de nuevo”**.



## 🧠 Tecnologías utilizadas

- **Angular 17** con el nuevo sistema de **Signals** (`signal`, `computed`, `effect`, `input`, `output`).
- **TailwindCSS** para el estilo base.
- **DaisyUI** como librería de componentes y utilidades de UI.
- **TypeScript** para la lógica y tipado.
- **HTML + CSS3** personalizados con animaciones.
- **RxJS** y **HttpClient** para la carga dinámica de CVs.
- **Google Fonts**: *Inter Tight*, *Jost* y *DM Sans*.



## 📂 Estructura del proyecto

```bash
src/
├── app/
│ ├── components/
│ │ ├── countdown/ → Contador regresivo del juego
│ │ ├── confetti/ → Animación de confeti al ganar
│ │ └── icon/ → Componente para iconos SVG
│ ├── pages/
│ │ ├── home/ → Pantalla inicial del juego
│ │ ├── game/ → Pantalla del juego con los CVs
│ │ └── final-page/ → Pantalla final (ganar o perder)
│ ├── services/
│ │ └── cv.service.ts → Carga, mezcla y gestión de los CVs
│ └── interfaces/
│ └── cv.interface.ts → Tipado de datos de los candidatos
└── assets/
└── data/
└── cv.data.json → Datos de los CVs real y falsos
```


## 🧩 Páginas del juego

### 🏠 **Home Page**
Pantalla de bienvenida con introducción al juego y botón de inicio.

### ⏱️ **Game Page**
- Muestra los **CVs candidatos**.
- Incluye el **componente `countdown`** que controla el tiempo.
- El jugador elige un candidato antes de que llegue a 0.

### 🎉 **Final Page**
Dependiendo del resultado:
- ✅ Si el jugador acierta: aparece una animación de **confeti**, mensaje de felicitación y botones para:
  - Descargar el CV real en PDF.
  - Ver el código fuente en GitHub.
  - Volver a revisar otros CVs.
- ❌ Si falla: mensaje de error y opción para volver al inicio.



## 🎨 Estilos y animaciones

- **TailwindCSS** + **DaisyUI** para el diseño responsive.
- **Animaciones personalizadas** definidas en `@keyframes` (por ejemplo `bounce-smooth` y confeti).
- **Modo responsive** adaptado a móvil y tablet.


## ⚙️ Ejecución local

```bash
# Instalar dependencias
npm install


# Ejecutar servidor local
ng serve

# Abrir en el navegador
http://localhost:4200
```


## 👩‍💻 Autor

Desarrollado por **ycamarasa**

💼 Frontend Developer | UX/UI Enthusiast

📎 [LinkedIn](https://www.linkedin.com/in/y-c-c/)


## 🧾 Licencia

Este proyecto está publicado bajo la licencia MIT.
Puedes usarlo, modificarlo o adaptarlo libremente dando el crédito correspondiente.
