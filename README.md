# Clase06.10
Antes que todo accedemos a la carpeta de nuestro proyecto en este caso a project

cd project 

# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Commands angular
npm install -g @angular/cli@^8.0.0

## Commands Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Estructura del Proyecto

```
src\
 |--config\         # Variables de entorno y configuración 
 |--controllers\    # Controladores 
 |--img\            # Imagenes públicas
 |--models\         # Postgrest models (data layer) 
 |--routes\         # Rutas del sistema
 |--services\       # Servicios de conexión BD y Token 
 |--validator\      # Esquemas de validación
 |--index.js        # Express app
```


## API Endpoints

<code>GET /auth</code> 
- **query:** 
    - **username**:  requerido
    - **password**:  requerido

<code>GET /api/producto</code> 
- Request
    - **query**
        - **page**
        - **limit**
- Response
    - **success:** boolean   
    - **msg :** string
    - **count:** number
    - **page :** number
    - **all :** number
    - **data :** array
 
<code>GET /api/producto/:id</code> 
- Request
    - **params:**
        - **id**:  requerido
- Response
    - **success :** boolean
    - **msg :** string
    - **data :** json
    
<code>POST /api/producto</code>
- Request
    - **body:**
        - **nombre** :  requerido
        - **detalle**
        - **valor** :  requerido
        - **img**
- Response
    - **success :** boolean
    - **data :** json
    - **msg :** string 

<code>PUT /api/producto</code>
- Request
    - **body**
        - **id** :  requerido
        - **nombre**
        - **detalle**
        - **valor**
        - **img**
- Response
    - **success :** boolean
    - **data :** json
    - **msg :** string 

<code>DELETE /api/producto/:id</code> 
- Request
    - **params:**
        - **id** : requerido 
- Response
    - **data :** array
    - **msg :** string 
    - **success :** boolean