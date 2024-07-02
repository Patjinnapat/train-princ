Cypress.Commands.add("GET_User", () => {
    return cy.request({
        method: 'GET',
        url: 'http://localhost:3000/users',
        failOnStatusCode: false
      }).then((response) => {
        return response;
      });
})

Cypress.Commands.add("POST_auth", () => {
  return cy.request({
      method: 'POST',
      url: '/login',
      body:{
          "username": "karn.yong@melivecode.com",
          "password": "melivecode",
          "expiresIn": 60000
        },
      failOnStatusCode: false
    }).then((response) => {
      return response.body.accessToken ;
    });
})

Cypress.Commands.add("POST_Attraction", (token) => {
  var authHeader = `bearer ${token}`;
  return cy.request({
      method: 'POST',
      url: '/auth/attractions/create',
      headers: {
          authorization : authHeader
      },
      body:{
        "name": "NU",
        "detail": "Rangsit University (RSU) is a private university in Pathum Thani, Thailand, focusing mainly on music, design, Information technology, and public health including independent professions",
        "coverimage": "https://www.melivecode.com/attractions/rsu.png",
        "latitude": 13.9642507,
        "longitude": 100.5866942
      },
      failOnStatusCode: false
    }).then((response) => {
      return response;
    });
})

Cypress.Commands.add("Update_Attraction", (token,id) => {
  var authHeader = `bearer ${token}`;
  return cy.request({
      method: 'PUT',
      url: '/auth/attractions/update',
      headers: {
          authorization : authHeader
      },
      body:{
        "id": id,
        "name": "NU NU"
      },
      failOnStatusCode: false
    }).then((response) => {
      return response;
    });
})