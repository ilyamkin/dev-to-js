<p align="center">
<img src="https://i.imgur.com/HzCCU11.png" width="250" alt="dev-to-js">
</p>
<h1 align="center">
dev-to-js
</h1>
<p align="center">
A tiny, universal client for the Dev.to API written in Typescript.
</p>

<div> 
<a href="https://www.npmjs.com/package/dev-to-js"><img src="https://img.shields.io/npm/v/dev-to-js" alt="dev-to-js"></a>
<a href="https://unpkg.com/dev-to-js"><img src="https://img.badgesize.io/https://unpkg.com/dev-to-js@0.1.1/dist/index.js?compression=gzip" alt="gzip size"></a>
<a href="https://unpkg.com/dev-to-js"><img src="https://img.badgesize.io/https://unpkg.com/dev-to-js@0.1.1/dist/index.js?compression=brotli" alt="brotli size"></a>
</div>

## ✨ Features:
- Tiny <1KB size gzip
- Works in Node.js and in Browser
- Built-in Typescript support

## 🔧 Installation

```bash
npm i dev-to-js
```

## 🌐 Usage

Import `dev-to-js` module in your project and initialize it with your [apiKey](https://dev.to/settings/account).

```js
import DevToJS from 'dev-to-js'

const DevToClient = new DevToJS({ apiKey: '%apiKey%' })

DevToClient.getMyArticles().then((data) => {
    console.log(data)
})

DevToClient.getFollowers().then((data) => {
    console.log(data)
})
```





