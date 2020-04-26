import DevTo from 'dev-to-js'

const DevToClient = new DevTo({ apiKey: '%apiKey%' })

/*DevToClient.getMyArticles().then((data) => {
    console.log(data)
})*/

DevToClient.getWebhooks().then((data) => {
    console.log(data)
})

DevToClient.getFollowers().then((data) => {
    console.log(data)
})
