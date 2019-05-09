<template>
  <v-app>
    <Toolbar/>
    <v-container fluid>
      <v-layout align-center justify-center row fill-height>
        <v-content>
          <router-view></router-view>
          <SideNav />
        </v-content>
      </v-layout>

    </v-container>
  </v-app>
</template>

<script>
  import Toolbar from './components/Toolbar.vue';
  import SideNav from './components/SideNav.vue';

  export default {
    name: 'App',
    components: {
      Toolbar,
      SideNav
    },
    data () {
      return {
        //
      }
    }
  }
</script>
