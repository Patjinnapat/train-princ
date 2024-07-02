describe('template spec', () => {
  it('passes', () => {
    cy.task("find" , {
      query:{locallangname:"Denmark" }  ,
      collectionName:"countries" } ).then(result => {
      cy.log(result[0].code);
      cy.log(result[0].name);
      expect({ name: result[0].code }).to.eql({ name: 'DK' })
  });
 
 })

})