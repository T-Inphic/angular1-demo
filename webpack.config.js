module.exports = {
   entry: './main.js',//入口文件
   output: {//输出文件
     path: __dirname + '/app',
     filename: './app.js'
   },
   module: {
     loaders: [//加载器
       {test: /\.css$/, loader: 'style-loader!css-loader'},
       {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
       {test: /\.(png|jpg|ttf)$/, loader: 'url-loader?limit=8192&name=../imgs/[hash:8].[name].[ext]'}
     ]
   }
 };