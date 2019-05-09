<template>
  <div>
    <TodoItem v-for="todo in allTodos"
              :key="todo.id"
              :todo="todo"
    />
  </div>
</template>

<script>
  import TodoItem from './TodoItem.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "TodoList",
    components: {
      TodoItem
    },
    data () {
      return {

      }
    },
    methods: {
      ...mapActions( ['fetchTodos'] )

    },
    computed: {
      ...mapGetters( ['allTodos'] )
    },
    created () {
      this.fetchTodos();
    },
  }
</script>

<style scoped>

</style>
