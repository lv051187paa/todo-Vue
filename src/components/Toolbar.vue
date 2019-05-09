<template>
  <v-toolbar color="cyan" dark clipped-left>
    <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
    <v-toolbar-title>Todo List</v-toolbar-title>

    <router-link v-for="route in routes" :key="route.name" :to="route.path"><v-btn color="success">{{route.name}}</v-btn></router-link>

    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

  </v-toolbar>

</template>

<script>
  import { routes } from '../router';
  import {mapActions} from 'vuex';

  export default {
    name: "Toolbar",
    components: {
    },
    data() {
      return {
        routes
      }
    },
    methods: {
      ...mapActions(['toggleSideNav'])
    }
  }
</script>

<style scoped>

</style>
