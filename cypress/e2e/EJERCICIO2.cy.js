//Swagger documentation: https://petstore.swagger.io/
//baseURL "https://petstore.swagger.io/v2" is configured in cypress.config.js

describe("Tienda de Mascotas", () => {
    const newPet = {
      id: 123456,
      name: "Luna",
      status: "available",
      updatedStatus: "sold",
    };
    it("Valida la creacion de una nueva mascota", () => {
      cy.request("POST", `https://petstore.swagger.io/v2/pet`, newPet).then((response) => {
        expect(response.status).to.equal(200);
        // Check that specific properties match
        expect(response.body.id).to.equal(newPet.id);
        expect(response.body.name).to.equal(newPet.name);
        expect(response.body.status).to.equal(newPet.status);
      });
    });
  
    it("Validar la  consulta de  mascota por ID", () => {
      cy.request("GET", `https://petstore.swagger.io/v2/pet/${newPet.id}`).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal(newPet.id);
      });
    });
  
    it("Validar actualizar mascota", () => {
      cy.request("POST", `https://petstore.swagger.io/v2/pet`, {
        petId: newPet.id,
        status: newPet.updatedStatus,
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal(newPet.updatedStatus);
      });
    });
  
    it("Validar eliminar mascota por ID", () => {
      cy.request("DELETE", `https://petstore.swagger.io/v2/pet/${newPet.id}`).then((response) => {
        expect(response.status).to.equal(200);
      });
      //Validar que el registro eliminado ya no existe
      cy.request({ url: `https://petstore.swagger.io/v2/pet/${newPet.id}`, failOnStatusCode: false }).then(
        (response) => {
          expect(response.status).to.equal(404);
        }
      );
    });
  });
  