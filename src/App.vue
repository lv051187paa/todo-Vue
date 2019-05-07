<template>
  <v-app>
    <Toolbar/>
    <v-container fluid>
      <v-layout align-center justify-center row fill-height>
        <v-content>
          <router-view></router-view>
        </v-content>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import Toolbar from './components/Toolbar.vue';

  export default {
    name: 'App',
    components: {
      Toolbar
    },
    data () {
      return {
        //
      }
    }
  }
</script>
