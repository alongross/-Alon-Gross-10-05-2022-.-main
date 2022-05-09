class HomePage {
  error() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  }
  open() {
    cy.visit('https://www.sidelines.io/')
  }
 broken_links() {
    cy.get("a:not([href*='mailto:]']").each(($el) => {
      if ($el.prop("href").length > 20) {
        const message = $el.text();
        expect($el, message).to.have.attr("href").not.contain("undefined");
        cy.log($el.attr("href"));
        let a = $el.attr("href");
      }
    });
  }
  apireq()
  {
    var array
    cy.visit('https://www.sidelines.io/')
  cy.request('https://sql-api.sidelines.io/games/upcoming').then(
    (response) => {
      expect(response.status).to.eq(200)
      array=response.body.data
      console.log(array.length)
  for (let i = 0; i < array.length; i++) {
    
     cy.visit( `https://www.sidelines.io/${array[i].league_name}/odds/${array[i].home_team_name}-vs-${array[i].away_team_name}`)
    cy.get('NO LINES YET').should('not.exist');
    cy.go("back");
  }
    })
  }
}
export default new HomePage();
