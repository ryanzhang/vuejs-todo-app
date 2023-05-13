<!--一个component就是由三个基本部分组成, template, script, style, template负责输出-->
<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo"/>
    <!--v-on就是捕捉事件，然后调用方法，这里事件是一层一层从下往上返的。并且只要写方法名称，不用写参数,因为参数是事件传递过来的，你在这一层也看不到，它是动态的，但是参数要和事件中定义的匹配上-->
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
// import Header from '../components/layout/Header';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import axios from "axios"
export default {
  name: 'Home',
  components: {
    AddTodo,
    Todos
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(id){
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(this.todos = this.todos.filter(todo => todo.id != id))
        .catch(err => console.log(err));
      // this.todos = this.todos.filter(todo => todo.id != id)
    },
    addTodo(newTodo){
      const { title, completed } = newTodo;
      axios.post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed
      })
      .then( this.todos = [...this.todos, newTodo])
      .catch(err => {console.log(err),this.todos= [...this.todos,newTodo]});
      //现在jsonplaceholder post方法会返回错误，所以注释了下面的语句，改用上面的语句,不用res.data
      // .then(res => this.todos = [...this.todos, res.data])
      // this.todos = [...this.todos, newTodo];
    }
  },
  created(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => this.todos = res.data)
      .catch(err => console.log(err));
  }
}

</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }

</style>
