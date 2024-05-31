#Readme

1.  INSTALACION DE CYPRESS

1.Instalar NodeJS
  Verificar si NodeJS esta instalado node -v npm -v
  Descargar NodeJS
  Instalar NodeJS
  Verificar si se instalo correctamente

2 Instalar Visual Studio code
  Descargar visual studio code
  Instalar visual studio code
 
3 Instalar Cypress
  Crear una carpeta donde trabajar
  Abrir un terminal en visual studio
  Iniciar un proyecto de NodeJs npm init -y
  Instalar Cypress npm install cypress@13.10.0 --save-dev
  Abrir la carpeta donde instalamos Cypress
  Abrir la terminal y ejecutar Cypress npx cypress open

4 Configurar Cypress
  Elegir e2e testing
  Click continue
  Elegir el navegador y empezar el testing
  Seleccionar scafold 
  Ejecutar el test que deseamos para verificar que funcione
  Cerrar la interfaz de cypress
  Verificar que se crearon las carpetas en el proyecto

5. Configurar cypress.config.js la base de la url para el acceso 
6. configurar en package.json el ambiente de ejecución
7. Instalación de reporteria con npm i --save-dev cypress-mochawesome-reporter
8. Agregar esta linea en el archivo  config file (cypress.config.js by default)
   En la sección   e2e: {
     require('cypress-mochawesome-reporter/plugin')(on);
   En el archivo cypress/support/e2e.js agregar
   import 'cypress-mochawesome-reporter/register';

EJERCICIO 1 
1. Creación de paginas 
	homePage y register 
	para segmentar las variables y los metodos que se van a utiliza en cada pagina 
2. Creación fixtures con la data a utilizar en cada pagina 
3. Importar las paginas en el proyecto 
4. crear el paso de prueba 
5 ejecutar el caso de prueba con nmp run prod
9. Para ejecutar el reporte ir al terminar e ingresar
    nmp run html-report (EndtoEnd)

EJERCICIO 2 
1. Creación de casos de prueba por cada endpoint
2. Validación de los endpoints
3. Ejecutar el caso de prueba con nmp run prod
4. Para ejecutar el reporte ir al terminar e ingresar
   nmp run html-api (BackEnd)
