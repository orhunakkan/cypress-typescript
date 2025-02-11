describe('User API Tests', () => {
  it('should create a new user', () => {
    const url = 'https://reqres.in/api/users'
    const payload = {
      name: 'John Doe',
      job: 'Software Developer'
    }

    cy.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json' },
      body: payload
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.name).to.eq(payload.name)
      expect(response.body.job).to.eq(payload.job)
      expect(response.body.id).to.exist
      expect(response.body.createdAt).to.exist
    })
  })
})