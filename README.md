# nextjs-portfolio
next.jsで作ったポートフォリオ

https://nextjs-portfolio.t-mario-y.now.sh/

## 使用技術
### [Next.js](https://nextjs.org/)
Reactを使用して、Webページ/アプリケーションを開発するためのフレームワーク
### [Apollo GraphQL](https://www.apollographql.com/)
Reactで使用できるGraphQLクライアント
### [Material-UI](https://material-ui.com/)
ReactのUI Components
### [Now](https://zeit.co/now)
Next.jsプロジェクト等をホスティングできるPaaS

## Next.jsの選定理由
「Reactを使ってポートフォリオサイトを構築したい」というモチベーションが先にあったが、  
これまでReactを触った経験がなく、ある程度乗っかれるフレームワークを探していた。  
GitHub API v4(GraphQL)を使いつつも、SPAというよりはWebページとして作成したかった。  
上記を踏まえたうえで、GatsbyかNext.jsで迷ったが、[ちょうど7月にNext.js 9が出ていて](https://nextjs.org/blog/next-9)タイミングが良かったので、こちらを触ってみることにした。  
Next.jsはNowと連携しており、デプロイ先に悩まなくて済むのもメリットだった。  

## ローカルでの始め方
アクセストークンは.envに記述する
```
git clone https://github.com/t-mario-y/nextjs-portfolio
cd nextjs-portfolio
touch .env
npm install
npm run dev
```

## nowへデプロイ
アクセストークンはnow.jsonに記述する
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
[公式のGetting Started](https://nextjs.org/learn/basics/getting-started/setup)に沿って学習した後に、こちらを作成した。  

### GraphQL
[GitHub GraphQL API Explorer](https://developer.github.com/v4/explorer/)でクエリを試せるのが助かった。  
react-apollo + apollo-boostを使うと、少ないコード量でNext.jsに組み込むことができた。  
このサイトがとても参考になった:  
[Apollo Client + React 入門](https://qiita.com/seya/items/e1d8e77352239c4c4897)

### Now
別途にaliasを設定しなくとも、デプロイ結果のURLが良い感じに分かりやすいので、そのまま使用している。  
内部的にはビルド毎に異なるURLが割り当てられており、固定URLは最新のビルドへ向けられている模様。  

### Material-UI
あまり凝ったことはしていないが、GitHub APIコール中のCircularProgressや、固定ヘッダ(App Bar)をさくっと作れたり、楽させてもらった。  
Media QueryもJavaScriptで実装するのが、初見では取っ付きづらかった。  
[Media queries in React for responsive design - Material-UI](https://material-ui.com/components/use-media-query/)  

## やり残したこと
 - Next.js 9でTypeScriptとの親和性がより上がったようだが、試せなかった。
 - ディレクトリ構成および、Reactコンポーネントの分割は見よう見まねに留まっており、迷いがある。
 - Apollo Clientでクエリ取得結果をキャッシュしたかったが、[apollo-boostからのマイグレーション](https://www.apollographql.com/docs/react/advanced/boost-migration/)が大変で実現しなかった。
   - Chrome devToolsでのAuditsスコアが許容範囲に収まっていたので、公開には支障なしと判断した。
