const nock = require('nock')
const DevTo = require('../../dist')

describe('Article resource', () => {
    test('getArticles returns a list of articles', async () => {
        // Set up the mock request
        const scope = nock('https://dev.to/api/')
          .get('/articles')
          .reply(200, [{ title: 'Article' }])

        // Make the request
        const DevToClient = new DevTo({ apiKey: 'XYZ' })
        await DevToClient.getArticles()

        // Assert that the expected request was made.
        scope.done()
    })

    test('getArticleByPath returns an article', async () => {
        // Set up the mock request
        const scope = nock('https://dev.to/api/')
          .get('/articles/user123/post-123')
          .reply(200, { title: 'Article' })

        // Make the request
        const DevToClient = new DevTo({ apiKey: 'XYZ' })
        await DevToClient.getArticleByPath('user123', 'post-123')

        // Assert that the expected request was made.
        scope.done()
  })
})

