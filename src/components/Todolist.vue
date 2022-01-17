<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
  </div>
  <div><input type="text" v-model="title" @keydown.enter="addTodo"/>
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos"><input type="checkbox" v-model="todo.done"/> <span
          :class="{ done: todo.done }"> {{ todo.title }}</span></li>
    </ul>
    <div v-else>暂无数据</div>
    <div> 全选<input type="checkbox" v-model="allDone"/> <span> {{ active }} / {{ all }} </span></div>
  </div>
  <div>
    <h1>{{ x }}</h1>
    <h1>{{ y }}</h1>

  </div>
</template>

<script setup>
import {ref, computed} from "vue";
import {useMouse} from '../utils/mouse'
import {useTodos} from "../utils/useTodos"

let count = ref(1)

function add() {
  count.value++
}

let {x, y} = useMouse()
let {title, todos, addTodo, clear, active, all, allDone} = useTodos(ref, computed);
</script>

<style>
h1 {
  color: red;
}


</style>