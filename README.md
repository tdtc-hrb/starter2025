# starter
A very basic (sample only) starter for playing with Redux
[fork](https://github.com/redux-book/starter)

## changelog
- Change the default port to 8181

package.json:
```xml
"start": "webpack-dev-server --hot --progress --port 8181"
```

- mode    
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

webpack.config.js:
```js
mode: 'development',
```

- cli    
must be install webpack-cli
```bash
npm i webpack-cli
```

### webpack change
- v5.x
move "index.html" to "public/index.html"

## run
```bash
git clone https://github.com/tdtc-hrb/starter2025.git
cd starter
npm install
npm start
```
