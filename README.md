# nextjs-portfolio
next.jsで作ったportfolio site

https://nextjs-portfolio.t-mario-y.now.sh/

## 使用技術
### [Next.js](https://nextjs.org/)
Reactを使用して、Webページ/アプリケーションを開発するためのフレームワーク
### [react-apollo](https://www.npmjs.com/package/react-apollo)
Reactで使用できるGraphQLライブラリ
### [Material-UI](https://material-ui.com/)
ReactのUI Components
### [Now](https://zeit.co/now)
Node.jsプロジェクトをホスティングできるPaaS

## なぜNext.jsか
「ポートフォリオサイトをReactを使って構築したい」というモチベーションが先にあった。  
Reactを触った経験がなく、ある程度乗っかれるフレームワークを探していた。  
GitHub API v4(GraphQL)を使いつつも、SPAというよりはWebページとして作成したかった。  
上記を踏まえたうえで、GatsbyかNext.jsで迷ったが、[ちょうど7月にNext.js 9が出ていて](https://nextjs.org/blog/next-9)タイミングが良かったので、こちらを触ってみることにした。  

Next.jsはNowと連携しており、デプロイ先に悩まなくて済むのもメリット。  

## 始め方
```
git clone https://github.com/t-mario-y/nextjs-portfolio
cd nextjs-portfolio
touch .env
npm install
npm run dev
```

## デプロイ
```
touch now.json
now
```

## アクセストークンの取り扱い
Next.jsの立ち上げとnowデプロイは始めやすく、ほぼゼロコンフィグで行けるが、アクセストークンをリポジトリから秘匿するためには少し設定が必要になる。  
 - development buildは、dotenv-webpackを使用して.envから読み込ませる。
 - staging buildでは、now.jsonに定義したアクセストークンを読み込ませる。

## 各技術について
### Next.js
[公式のGetting Started](https://nextjs.org/learn/basics/getting-started/setup)に沿って学習した後に、このリポジトリを作成した。  

### GraphQL
[GitHub GraphQL API Explorer](https://developer.github.com/v4/explorer/)でクエリを作成した。  
Reactに繋ぐためのクライアントはapollo回り(react-apollo, apollo-client)  

### Now
別途にaliasを設定しなくとも、デプロイ結果のURLが良い感じに分かりやすいのでそのまま使用している。  
内部的にはビルド毎に異なるURLが割り当てられており、最新のビルドが固定URLに向けられている模様。  
