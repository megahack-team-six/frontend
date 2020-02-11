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
              class="ma-2"
              color="primary"
              large
              @click="bla"
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
export default {
  name: 'Login',
  methods: {
    bla () {
      console.log(this.$router)
    }
  }
}
</script>
