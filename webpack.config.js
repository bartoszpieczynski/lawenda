module.exports = {
   entry: "js/app.js",
   output: {
       path: `${__dirname}/js`,
       filename: "bundle.js"
   },
   watch: true,
   devtool: "source-map",
   module: {

   }
}