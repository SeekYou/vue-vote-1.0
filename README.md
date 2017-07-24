# vue-vote-1.0
refactoring a vote webapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### 遇到的问题
 > XMLHttpRequest cannot load http://localhost:3000/new_post. Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response.

没有通过预检查,修改为
headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }

Form Data
{"firstName":"Fred","lastName":"Flintstone"}:
