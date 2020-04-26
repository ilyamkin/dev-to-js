# dev-to-js

A tiny, universal client for the Dev.to API written in Typescript.

## ✨ Features:
- Tiny 935B size gzip
- Works in Node.js and in Browser
- Built-in Typescript support

## 🔧 Installation

```
npm i dev-to-js
```

## 🌐 Usage

Import `dev-to-js` module in your project and initialize it with your [apiKey](https://dev.to/settings/account).

```
import DevToJS from 'dev-to-js'

const DevToClient = new DevToJS({ apiKey: '%apiKey%' })

DevToClient.getMyArticles().then((data) => {
    console.log(data)
})

DevToClient.getFollowers().then((data) => {
    console.log(data)
})
```





