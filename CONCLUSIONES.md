EJERCICIO 1:


1. Se elaboro un test case  con lo siguiente:
	• Agregar dos productos al carrito
	• Visualizar el carrito
	•Completar el formulario de compra
	•Finalizar la compra

2. Los casos de prueba realizaron correctamente 
3. Se trabajo con dos páginas que es la selección de los productos y registro del formulario. 
4. Se instalo xpath para cypress a fin de utilizarlo para seleccionar botones requeridos para la prueba.
5. Se instalo cypress mochasone  para obtener los resultados


DevTools listening on ws://127.0.0.1:63816/devtools/browser/8060bdca-f56a-4758-8123-8750a9ab097c

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        13.10.0                                                                        │
  │ Browser:        Chrome 125                                                                     │
  │ Node Version:   v20.14.0 (C:\Program Files\nodejs\node.exe)                                    │
  │ Specs:          1 found (EJERCICIO1.cy.js)                                                     │
  │ Searched:       D:\QA\RETO TECNICO\RETO\cypress\e2e\EJERCICIO1.cy.js                           │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘

Remove output folder D:\QA\RETO TECNICO\RETO\cypress\reports\html

────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  EJERCICIO1.cy.js                                                                (1 of 1)


  Proyecto de prueba- compras de productos
    √  Seleccion de dos productos (31097ms)


  1 passing (31s)

[mochawesome] Report JSON saved to D:\QA\RETO TECNICO\RETO\cypress\reports\html\.jsons\mochawesome.json


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     31 seconds                                                                       │
  │ Spec Ran:     EJERCICIO1.cy.js                                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘

Start generate report process
Read and merge jsons from "D:\QA\RETO TECNICO\RETO\cypress\reports\html\.jsons"
Enhance report
Create HTML report
HTML report successfully created!
D:\QA\RETO TECNICO\RETO\cypress\reports\html\index.html

====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  EJERCICIO1.cy.js                         00:31        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:31        1        1        -        -        -

PS D:\QA\RETO TECNICO\RETO>

EJERCICIO 2 


1. Se añadio una mascota a la tienda
2. Se Consulto la mascota ingresada previamente (Búsqueda por ID)
3. Se Actualizó el nombre de la mascota y el estatus de la mascota a “sold”
4. Se consultó la mascota modificada por estatus (Búsqueda por estatus)
5. Se realizo las asersiones por cada acción 
6. Obtivo los resultados por cada de prueba. 

RESULTADO DE LA PRUEBA 

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        13.10.0                                                                        │
  │ Browser:        Chrome 125                                                                     │
  │ Node Version:   v20.14.0 (C:\Program Files\nodejs\node.exe)                                    │
  │ Specs:          1 found (EJERCICIO2.cy.js)                                                     │
  │ Searched:       D:\QA\RETO TECNICO\RETO\cypress\e2e\EJERCICIO2.cy.js                           │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘

Remove output folder D:\QA\RETO TECNICO\RETO\cypress\reports\html

────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  EJERCICIO2.cy.js                                                                (1 of 1)


  Tienda de Mascotas
    √ Valida la creacion de una nueva mascota
    √ Validar la  consulta de  mascota por ID
    √ Validar actualizar mascota
    √ Validar eliminar mascota por ID


  4 passing (2s)

[mochawesome] Report JSON saved to D:\QA\RETO TECNICO\RETO\cypress\reports\html\.jsons\mochawesome.json


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     1 second                                                                         │
  │ Spec Ran:     EJERCICIO2.cy.js                                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘

Start generate report process
Read and merge jsons from "D:\QA\RETO TECNICO\RETO\cypress\reports\html\.jsons"
Enhance report
Create HTML report
HTML report successfully created!
D:\QA\RETO TECNICO\RETO\cypress\reports\html\index.html

====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  EJERCICIO2.cy.js                         00:01        4        4        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:01        4        4        -        -        -



