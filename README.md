# DevToJS

A tiny, universal client for the Dev.to API written in Typescript.

## ✨ Features:
- Works in Node.js and in Browser
- Built-in Typescript support

## 🔧 Installation

```
npm i dev.to
```

## 🌐 Usage

Import `dev.to` module in your project and initialize it with your [apiKey](https://dev.to/settings/account).

```
import DevTo from 'dev.to'

const DevToClient = new DevTo({ apiKey: '%apiKey%' })

DevToClient.getMyArticles().then((data) => {
    console.log(data)
})

DevToClient.getFollowers().then((data) => {
    console.log(data)
})
```





