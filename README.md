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
### Next.js

### GraphQL部分
GitHub [GraphQL API Explorer](https://developer.github.com/v4/explorer/)でクエリを作成し、react-apolloで呼び出します。
```
git clone https://github.com/t-mario-y/nextjs-portfolio
cd nextjs-portfolio
touch .env
touch now.json
npm install
npm run dev
```

### UI Components部分

### build & deploy
```
//開発環境立ち上げ
npm run dev
//nowデプロイ
now
```
Now側でGitHub連携すれば、master pushトリガーでの自動デプロイも走って便利です。
ほぼゼロコンフィグで行けますが、GitHub APIアクセストークンを秘匿するためには少し設定が必要です。  
 - 開発ビルドに際しては dotenv-webpackを使用して.envから読み込みます。
 - ステージング環境ビルドは、now.jsonを使用します。