module.exports = {
  devServer: {
    proxy: {
      "apiPath": {
        target: "http://hjsj-gin.chenfc.com",
        changeOrigin: true,
        pathRewrite: {
          "^/apiPath": "",
        }
      },
    }
  }
};
