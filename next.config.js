//markdown変換
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});
//これを後に書くとdotenvが失敗する on Win10
//TODO:そもそもmodule.exports が2箇所あるほうが変。
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});

//.envファイルの変数を読み込み
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ];

    return config;
  },
};
