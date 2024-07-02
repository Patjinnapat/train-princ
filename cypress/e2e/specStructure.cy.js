before(() => {
  var first_name = "Jinnapat"
  cy.log('start')
    // root-level hook
    // runs once before all tests
  })
  beforeEach(() => {
    // root-level hook
    // runs before every test block
    cy.visit('https://sit-eregistration.cfwplatform.com/v1.5/w-app/registration/?token=70d2422c-bb7a-4b62-978e-80ea4e897eb6')
    // Login function
  })
  afterEach(() => {
    // runs after each test block
    // cy.get('[type = "submit"]').click()
  })
  after(() => {
    // runs once all tests are done
    // Log Out function
  })
  describe('Hooks 1', () => {
    it('H1 add case 1', () => {
    cy.get('.v-btn').click()
    cy.get('#radio-group-3-messages > .v-messages__message').should('have.text', 'กรุณาเลือกประเภทลูกค้า')
    cy.get('#input-9-messages > .v-messages__message').should('have.text', 'กรุณากรอกชื่อ')
    cy.get('#input-11-messages > .v-messages__message').should('have.text', 'กรุณากรอกนามสกุล')
    cy.get('#input-13-messages > .v-messages__message').should('have.text', 'เบอร์โทรศัพท์มือถือที่คุณป้อนไม่ถูกต้อง ตัวอย่าง: 0891069999')
    cy.get('img').should('be.visible')
    })
    // it.skip('H1 add case 2', () => {
    // cy.get('.v-btn').click()
    // cy.get('#radio-group-3-messages > .v-messages__message').should('have.text', 'กรุณาเลือกประเภทลูกค้า')
    // cy.get('#input-9-messages > .v-messages__message').should('have.text', 'กรุณากรอกชื่อ')
    // cy.get('#input-11-messages > .v-messages__message').should('have.text', 'กรุณากรอกนามสกุล')
    // cy.get('#input-13-messages > .v-messages__message').should('have.text', 'เบอร์โทรศัพท์มือถือที่คุณป้อนไม่ถูกต้อง ตัวอย่าง: 0891069999')
    // cy.get('img').should('be.visible')
    // })
    it.skip('H1 add case 3', () => {
      // login_regis('pat','password')
      cy.login_facebooks('x','y')
    })
    it('H1 add case 4', () => {
    })
    it('H1 add case 5', () => {
    })
  })

  function login_regis(user , pass){
    cy.visit('https://www.facebook.com/')
    cy.contains('อีเมลหรือ')
    cy.get('[data-testid="royal_email"]').type(user);
    cy.wait(2000);
    cy.get('[data-testid="royal_pass"]').type(pass).wait(1000);
    cy.get('[data-testid="royal_login_button"]').click();
  }