# Next-ts 簡易模板

## 簡介

此Project借鑒了[Nextjs-TS-Antd-Redux-Storybook-Jest-Starter](https://github.com/Jacky-Summer/nextjs-ts-antd-redux-storybook-starter)

同樣以Next為主體，採用`Typescript`和`redux-saga`的基礎模板，但style採用`twin.macro`。


## 開始

請透過Clone/Download zip來取得檔案，並執行以下動作後安裝。

```bash
npm run install
npm run dev
# or
yarn install
yarn dev
```
開啟 [http://localhost:3000](http://localhost:3000) 進行本機測試。

如果需要測試已編譯程式，請先執行以下動作:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## 資料夾分類

### pages

頁面資料夾，每一個檔案都是獨立頁面。以下為特殊檔案:

`_app.tsx` 網站主頁顯示的容器，變數傳遞的最上層。
`_document.tsx` styled-components的設定，用來將編譯後的樣式正確傳遞到每一頁。
`index.tsx` 預設首頁。

### public

用來存放Static File，可參照官方文件: [Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving)

### server

自訂API。在這裡設定參數與params。

### src

放置各種功能，

`components` 單一組件。可再依不同功能/頁面增加分類資料夾。
`containers` 較大型的組件。
`redux` 狀態傳遞的設定。
`utils` 用來放可重複使用的功能。

### styles

樣式資料夾，包含全域樣式。


### types

Typescript專用設定，在網頁中傳遞的變數類型。其中有幾種固定的重要類型:

`store.d.ts` 和redux相關的類型指定。新增reducer時必須加上，避免傳遞時找不到state的類型。
`twin.d.ts` twin.macro的相關設定。在css中新增可傳遞的變數名稱如`variant="primary"`時，此處須同步加上類型判斷。


## 其他

`next.config.js` next本身的各種設定。
`tsconfig.json` ts專用，其中`paths`可以自訂並簡化常用路徑。