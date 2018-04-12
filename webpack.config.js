module.exports = {
	entry:'./src/index.js',
	output:{
		path:__dirname,
		filename:'./dist/main.js'
	},
	module:{
		rules: [
	      {
	        test: /\.js$/,
	        exclude: /(node_modules)/,
	        use: {
	          loader: 'babel-loader',
	          options: {
	            presets: ['es2015'],
	            plugins:['transform-runtime']
	          }
	        }
	      },
	      {
	      	test: /\.vue$/,
	      	use: {
	          loader: 'vue-loader',
	        }
	      },
	      {
	      	test: /\.css$/,
	      	use: [
	      		{ loader: 'style-loader' },
    			{ loader: 'css-loader' }
	        ]
	      }
	    ]
	}
}