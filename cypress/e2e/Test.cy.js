const data = require("../fixtures/testdata.json")
describe('template spec', () => {
  it('passes', () => {
    cy.log(data['first_name'])
    cy.visit('/')
    cy.get('[role="combobox"]').click()
    cy.get('#v-menu-2 > div > div > div:nth-child(3) > div.v-list-item__content > div').contains('EN').click()
    cy.get('#input-7').click()
    cy.get('#input-9').type(data['first_name'])
    cy.get('#input-11').type(data['last_name'])
    cy.get('#input-18').click()
    cy.get('#input-42').type(data['cid'])
    cy.get('#input-42-messages > .v-messages__message').should('have.text', 'Please fill in your citizen id.')

  

    // cy.get('#checkbox-20').check()
    // cy.get('#tnc-checkbox').check()
    // cy.get('#input-18').click()
    // cy.get('#input-29').type('11037')
    // cy.wait(5000)
    // cy.get('[role="combobox"]').click()
    // cy.get('#v-menu-2 > div > div > div:nth-child(3) > div.v-list-item__content > div').contains('EN').click()
  })

  // it('check required', () => {
  //   cy.visit('sit-eregistration.cfwplatform.com/v1.5/w-app/registration')
  //   cy.get('.v-btn').click()
  //   cy.get('#radio-group-3-messages > .v-messages__message').should('have.text', 'กรุณาเลือกประเภทลูกค้า')
  //   cy.get('#input-9-messages > .v-messages__message').should('have.text', 'กรุณากรอกชื่อ')
  //   cy.get('#input-11-messages > .v-messages__message').should('have.text', 'กรุณากรอกนามสกุล')
  //   cy.get('#input-13-messages > .v-messages__message').should('have.text', 'เบอร์โทรศัพท์มือถือที่คุณป้อนไม่ถูกต้อง ตัวอย่าง: 0891069999')
  //   cy.get('img').should('be.visible')
  // })
  // it('check required', () => {
  //  cy.login_regis('patty@hotmail','081111')
  // })
})