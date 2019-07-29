# nextjs-portfolio
next.jsで作ったportfolio site

https://nextjs-portfolio.t-mario-y.now.sh/

## 使用技術
### [Next.js](https://nextjs.org/)
Reactを使用して、SSRするWebページ/アプリを構築するためのフレームワーク
### [react-apollo](https://www.npmjs.com/package/react-apollo)
Reactで使用できるGraphQLライブラリ
### [Material-UI](https://material-ui.com/)
ReactのUI Components
### [Now](https://zeit.co/now)
WebサーバをホスティングできるPaaS

## なぜNext.jsか
「Reactを使って構築したい」というモチベーションが先にあったが、Reactを触ったことがなく、ある程度乗っかれるフレームワークを探していた。  
GitHub API v4(GraphQL)を使いつつも、サイトとして作成したかった。  

GatsbyかNext.jsで迷ったが、[ちょうど7月にNext.js 9が出ていて](https://nextjs.org/blog/next-9)タイミングが良かったので、こちらを触ってみることにした。  

Next.jsはNowと連携しており、デプロイ先に悩まなくて済むのもメリット。

## 各技術
### GraphQL部分
GitHub API v4(GraphQL)のアクセストークンを .env に定義します。
```
git clone https://github.com/t-mario-y/nextjs-portfolio
npm install
npm run dev
```

### UI Components部分

### build & deploy

## ハマりどころ