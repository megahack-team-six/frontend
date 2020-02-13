<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>JudiBras</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            @click="loginOrLogout"
          >
            <v-list-item-title>{{ logUserText }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    isLogged () {
      return !!this.jwt
    },
    logUserText () {
      return this.isLogged ? 'Sair' : 'Entrar'
    },
    ...mapGetters('user', [
      'jwt'
    ])
  },
  methods: {
    loginOrLogout () {
      if (this.isLogged) {
        this.logout()
        this.$router.push('/')
      } else {
        this.$router.push('/login')
      }
    },
    ...mapActions('user', {
      loadUser: 'init',
      logout: 'logout'
    })
  },
  mounted () {
    this.loadUser()
  }
}
</script>
