describe("Aspa", () => {
  it("avaa etusivun", () => {
    cy.visit("/");
    cy.contains("Aspa 2.0");
    cy.contains("Koti");
    cy.contains("Tallennetut");
    cy.contains("Haku");
  });

  it("pystyy klikkaamaan tallennusta, ilmoittaa jos asiakas on tallennettu", () => {
    cy.visit("/");
    cy.contains("tallenna").click();
    cy.contains("Tallennettu!");
  });

  it("Kotinäkymän hakuun pystyy kirjoittamaan", () => {
    cy.visit("/");
    cy.get("input").type("abc");
  });

  it("Tallennettujen hakuun pystyy kirjoittamaan", () => {
    cy.visit("/customers");
    cy.get("input").type("abc");
  });

  it("vaihtaa tallennettuihin klikatessa", () => {
    cy.visit("/");
    cy.contains("Tallennetut").click();
    cy.url().should("eq", "http://localhost:3000/customers");
  });

  it("klikkaamalla asiakasta avautuu asiakkaan tiedot", () => {
    cy.visit("/customers");
    cy.get("#singlecustomer:first").click();
  });

  it("selaimen takaisin-nappi palauttaa tallennettuihin asiakkaisiin", () => {
    cy.visit("/customers");
    cy.get("#singlecustomer:first").click();
    cy.go("back");
    cy.url().should("eq", "http://localhost:3000/customers");
  });

  it("koti-nappi palauttaa etusivulle", () => {
    cy.visit("/customers");
    cy.contains("Koti").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Asiakkaita pystyy muokkaamaan", () => {
    cy.visit("/customers");
    cy.get("#singlecustomer:first").click();
    cy.get("#muokkaa").click();
    cy.get("#name").clear().type("testaaja");
    cy.get("#edit").click();
    cy.contains("testaaja");
  });

  it("Asiakkaita pystyy poistamaan, palaa takaisin listanäkymään", () => {
    cy.visit("/customers");
    cy.get("#singlecustomer:first").click();
    cy.get("#poista").click();
    cy.url().should("eq", "http://localhost:3000/customers");
  });
});
