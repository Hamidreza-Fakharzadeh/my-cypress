const serverUrl = 'http://localhost:8080'

const initialData = {
  email: 'my-email@example.com',
  address: '123 street',
  city: 'Leeds',
  state: 'London',
  checked: true,
}

const generateExpected = data => ({
  email: data.email,
  address: data.address,
  city: data.city,
  state: data.state || [],
  checked: data.checked,
})

beforeEach(() => {
  cy.request('POST', `${serverUrl}/reset`)
  cy.visit('/')
})

describe('My First Test', () => {
  it('my-cypress app', () => {
    
    cy.fillingForm(initialData)
    cy.request(serverUrl).then((response) => {
      console.log(response)
      expect(response.body[0]).to.deep.eq(generateExpected(initialData))
    })
  })
})
