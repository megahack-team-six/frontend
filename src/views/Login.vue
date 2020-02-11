<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="4"
        sm="8"
        md="3"
      >
        <v-card class="elevation-12">
          <v-card-text>
            <div class="text-center display-1">Login</div>
            <div class="text-center subtitle">Continuar para JudBras</div>

            <v-form>
              <v-text-field
                label="Usuário"
                name="login"
                prepend-icon="mdi-account"
                type="text"
              />

              <v-text-field
                id="password"
                label="Senha"
                name="password"
                prepend-icon="mdi-key"
                type="password"
              />
              <v-btn text small link color="primary">Esqueci minha senha</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text small color="primary">Criar Conta</v-btn>
            <v-spacer />
            <v-btn
              color="primary"
              large
              @click="login"
            >
              Entrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  methods: {
    login () {
      this.toggleAppBar(true)
      this.$router.push('home')
    },
    ...mapActions([
      'toggleAppBar'
    ])
  }
}
</script>
