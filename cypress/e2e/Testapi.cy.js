
let token,id
before(() => {
  cy.POST_auth().then((response) => {
    cy.log(response).wait(2000)
    token = response
  })
})

describe('template spec', () => {
  // it.skip('get', () => {
  //   cy.GET_User().then((response) =>{
  //     expect(response.status).to.eq(200);
  //     cy.log(response.body).wait(5000)
  //     assert.equal(response.body['name'],'pat')
  //   })
  // });


  it('create', () => {
    cy.log(token)
      cy.POST_Attraction(token).then((response) => {
        expect(response.status).to.eq(200)
        cy.log(response.body.attraction.name)
        cy.log(response.body.attraction.id)
        id = response.body.attraction.id
        assert.equal(response.body.attraction.name,'NU')
      })
  });

  it('update', () => {
      cy.Update_Attraction(token,id).then((response) => {
        expect(response.status).to.eq(200)
        cy.log(response.body.status)
        assert.equal(response.body.attraction.name,'NU NU')
      })
  });

  

})