# dev-to-js

A tiny, universal client for the Dev.to API written in Typescript.

<div> 
<a href="https://www.npmjs.com/package/dev-to-js"><img src="https://img.shields.io/npm/v/dev-to-js" alt="dev-to-js"></a>
<a href="https://unpkg.com/dev-to-js"><img src="https://img.badgesize.io/https://unpkg.com/dev-to-js?compression=gzip" alt="gzip size"></a>
<a href="https://unpkg.com/dev-to-js"><img src="https://img.badgesize.io/https://unpkg.com/dev-to-js?compression=brotli" alt="brotli size"></a>
</div>

## ✨ Features:
- Tiny <1KB size gzip
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





