<template>
  <div>
    <TodoItem v-for="todo in todos"
              :key="todo.id"
              :todo="todo"
              :onDelete="() => deleteItem(todo.id)"
              @onEdit="onEdit"
    />
  </div>
</template>

<script>
  import axios from 'axios';
  import { api } from '../api';
  import TodoItem from './TodoItem.vue';

  export default {
    name: "TodoList",
    components: {
      TodoItem
    },
    data () {
      return {
        todos: []
      }
    },
    methods: {
      deleteItem: async function(id) {
        await api.delete( `/todos/${id}` );
        this.todos = this.todos.filter( todo => todo.id !== id )
      },
      onEdit: async function(todo) {
        await api.patch( `/todos/${todo.id}`, {title: todo.title} ).then( res => this.todos[todo.id] = res.data )
      }
    },
    created () {
      const get = async () => {
        await api.get( '/todos' ).then( res => this.todos = res.data )
      };
      get();
    }
  }
</script>

<style scoped>

</style>
