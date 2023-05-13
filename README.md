# firstvue 学习使用vuejs
这个程序是vuejs crash course 里面的todoapp。 
主要展示了vuejs 的主要工作原理.

## vue模块

* template+script+style
	* template **<=这就是显示**
	* script
		* CP(Couple) MIND  **《=逻辑控制，数据，方法就在这**
			* method()
			* import, export的用法
			* Name,
			* data()
			* component,
			* props:
	* style,就是css **《= CSS**

## v-绑定,以及模板
* 模板引用
  * 使用 {{ }} 里面可以使用javascript 语法，以及表达式,  但注意只能是表达式包括三元表达式，不能是语句
    * 里面的值最后会转换为字符创，如果最终想被转换为可被解析的html 需要用 <span v-html="rawHtml" /> 其中rawHtml= <span style="color:red">This should be red</span>
* v-bind
  * v-bind:*= 后面可以
  * v-bind:class  **<=绑定 html class** *例子 v-bind:class="${'is-completed':todo.completed}"* 这里面用到${} 主要是因为是一个表达式
  * v-bind:id|属性="isVar" isVar是一个变量. 只有isVar是true 绑定的id ，属性才会出现
  * v-bind 用于传递变量到另一个component v-bind:varnext=current-var
    * current var 表示当前component中的变量 varnext表示传递到下一个component中的变量
* v-if v-for
  * v-if, v-for都是来操纵 html element，它不像 v-bind是操作一个属性
* v-on  **<= 绑定一个事件,然后触发方法**
	* $emit(),用来释放事件
	* v-on:event=method, methed可以接受 event中传过来的参数， event是从下层页面返回回来的
* v-model="html component的名字" 就是用来绑定某个html元素的 值 需要的是它的名字
* 动态参数 
  * v-bind:[attributeName]="url" 其中attributeName是 data中的一个变量 如果它的值是href 那么这个bind就等效于 v-bind:href
  * v-bind:, v-on: 提供缩写形式 
    * v-bind: 缩写成 : 
    * v-on: 缩写成 @

## 生命周期概念
  * vuejs的原理就是在页面 加载过程中 Vue APP 帮助你把模板语言 用javascript 动态生成Dom 对象 插入到index.html中，所以Vue APP 可以看作是一个容器。 所以它是有生命周期的。 在这个例子中 加载jsonplaceholder网站中的数据就用到了 create 声明周期方法
  
  ```
    methods: {
      created() {
        //加载数据
      }
    }
  ```
## vue依赖

* axios
	* 就是调远程的http method, 就是ajax的一个实现
    * axio 有两种调用方法
      1. 同步 如果要用${id} 就要用`` 代替~~引号~~
        ```javascript
        axios.post('you_rest_url', object)
          .then(res => blabla)
          .catch(err){
            console.log(err)
          }
        ```
      2. 异步
        ```javascript
        async someMethod() {
          try{
            const response = await axios.post('your_rest_url', object);
            //response.data blabla
          } catch(err){

          }
        }
        ```

	* 可以利用jasonplaceholder作测试
  * vuex就是客户端的状态store, 详情切换至vuex branch查看
  * vuerouter 就是多了一个 路由转发器 也可以理解为controller
### vuerouter

* index.js 作router ->PNC->Path, Name, Component, 还有延迟加载
* Vuerouter 引入了 view + component + router的概念， 原来的App.vue不能删除，每次引入vuerouter 就会覆盖掉 App.vue 要做好备份
  * view 就是 主页面中的页签， 看上去是多个页面菜单一样，实际上还是SPA 单页面程序。 
  * route就是一个js module 即 router/index.js 里面定义PNC,它有懒加载功能.
  * component还是原来的component功能。

## nuxt

* server side rendering vue.js
* create-nuxt-app 用来创建 服务端 rendering vuejs
* 作用就是第一次，可以在服务端render好
	* 对搜索引擎友好
* 另外就是不需要router 直接就是一个vue 一个rest link



## 工具与环境

* chrome plugin vuedevtools **《=可以查看 运行时的各种对象，属性，还有控制台打印**
* vscode plugins vtour
* vue cli
	* vue ui
  * vue create

> 本项目就是 vue create 创建的项目， 下面是自动创建的README.md

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
