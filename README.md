本專案基於 [bottender](https://bottender.js.org/) 框架進行實作

## 目的

希望可以做一款適用於所有遊戲的聊天機器人，並且提供高度客製化來讓使用者可以自行設定自己的聊天機器人。

## 事前準備

- [Git](https://git-scm.com/)
- [Line 機器人申請](https://manager.line.biz/)，記下 Access Token & Client Secret
- [node.js](https://nodejs.org/)

## 安裝順序

1. clone 本專案

```bash
git clone https://github.com/hanshino/hermiller
```

2. cd 到本專案

```bash
cd hermiller
```

3. 套件安裝

如果你是使用 `npm`

```bash
npm install
```

如果你是使用 `yarn`

```bash
yarn install
```

4. 環境變數設置

```bash
cp .env.example .env
```

填上你的 Access Token & Client Secret

5. 啟動服務

```bash
npm start
```
