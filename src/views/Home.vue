<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Bem vindo ao sistema JudBrass
        </h1>

        <p class="subheading font-weight-regular">
          Escolha as opções abaixo ou use o menu de três pontos no canto superior
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Links
        </h2>

        <v-row justify="center">
          <v-col cols="4" md="1">
            <v-btn
              to="Login"
              color="primary"
            >
              Login
            </v-btn>
          </v-col>
          <v-col cols="4" md="1">
            <v-btn
              to="Events"
            >
              Eventos
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>
