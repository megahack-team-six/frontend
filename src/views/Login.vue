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
        <v-alert
          :value="error.visible"
          type="error"
          class="elevation-12"
        >
          {{ error.message }}
        </v-alert>
        <v-card class="elevation-12">
          <v-card-text>
            <div class="text-center display-1">Login</div>
            <div class="text-center subtitle">Continuar para JudBras</div>

            <v-form
              :valid="form.valid"
            >
              <v-text-field
                v-model="form.email"
                :rules="form.emailRules"
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="text"
              />

              <v-text-field
                v-model="form.password"
                :rules="form.passwordRules"
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
              @click="submit"
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
  data () {
    return {
      error: {
        message: '',
        visible: false
      },
      form: {
        valid: true,
        email: '',
        emailRules: [
          v => !!v || 'E-mail é obrigatório'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Senha é obrigatória'
        ]
      }
    }
  },
  methods: {
    submit () {
      const { email, password } = this.form

      this.login({ email, password }).then((message) => {
        if (message === 'Login efetuado com sucesso') {
          this.$router.push('events')
        } else {
          this.error.visible = true
          this.error.message = message
        }
      })
    },
    ...mapActions('user', [
      'login'
    ])
  }
}
</script>
