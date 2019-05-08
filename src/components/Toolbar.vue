<template>
  <v-toolbar color="cyan" dark clipped-left>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Inbox</v-toolbar-title>

    <router-link v-for="route in routes" :key="route.name" :to="route.path"><v-btn color="success">{{route.name}}</v-btn></router-link>

    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import { routes } from '../router';

  export default {
    name: "Toolbar",
    data() {
      return {
        routes
      }
    }
  }
</script>

<style scoped>

</style>
