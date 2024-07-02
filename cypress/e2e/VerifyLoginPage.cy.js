let android_phone = [
	{"brand" : "Samsung" , "series" : 34 , "price" : 34} ,
  {"brand" : "Test BBBBBBB" , "series" : 14 , "price" : 34} ,
  {"brand" : "Test CCCCCCC" , "series" : 20 , "price" : 34} ,
  {"brand" : "Test DDDDDDD" , "series" : 93 , "price" : 34} ,
  {"brand" : "Test TTTTTTT" , "series" : 67 , "price" : 34} ,
]

let list = ['1','2','3']

function print_phone(text) {
  for (let i = 0; i < android_phone.length; i++) {
    cy.log(`phone : ${android_phone[i]['brand']} series: ${android_phone[i]['series']} price: ${android_phone[i]['price']}`)
  }
  cy.log(text)
}

let food = 'hamberger'

describe('training', () => {

  // it('if case', () => {
  //   let animal = 'dog'

  //   if(animal != 'rat'){
  //     cy.log(animal+' sad')
  //   }
  //   print_phone(animal)
  //   cy.log('end')
  // })

  // it('loop case', () => {

  //   for (let a = 15; a > 10; a-=2) {
  //     cy.log(a)
  //   }

  //   cy.log(android_phone[2]['brand'])
  // })

  // it('print loop', () => {
  //   list.forEach(x => {
  //     cy.log(x)
  //   });
  // })

  // it('true/false case', () => {
  //   let z = 0
  //   if(z = 1){
  //     cy.log("TRUE")
  //   }else{
  //     cy.log("FALSE")
  //   }
  //   cy.log(z)
  // })

  it('post test', () => {
    
    for (let a = 1; a <= 5 ; a++) {
      cy.log('a='+a)
      for (let b = 1; b <= 5 ; b++) {
        cy.log(a*b)
      }
    }
  })


})


