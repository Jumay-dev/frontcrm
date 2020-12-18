<template>
  <v-container fill-height justify-center align-center>
    <v-flex xs12 sm6 md4 lg3>
      <v-card class="mt-0 pt-0" elevation="2">
        <v-card-title class="blue darken-1">
          <h4 style="color:white">DS.Med система регистрации диллеров</h4>
        </v-card-title>
        <v-card-text class="mt-10">
          <form @submit.prevent="login">
            <v-layout row wrap>
              <v-flex xs12 md4>
                <v-subheader>e-mail</v-subheader>
              </v-flex>
              <v-flex xs12 md8>
                <v-text-field
                  class="input-group--focused mr-2"
                  name="email"
                  v-model="email"
                  label="email"
                  value="Input text"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 md4>
                <v-subheader>Пароль</v-subheader>
              </v-flex>
              <v-flex xs12 md8>
                <v-text-field
                  class="input-group--focused mr-2"
                  name="password"
                  type="password"
                  v-model="pass"
                  label="password"
                  value="Input text"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-card-actions>
              <v-btn   elevation="4" type="submit">Войти</v-btn>
            </v-card-actions>
            <v-snackbar
              v-if="error"
              :timeout="timeout"
              :top="true"
              :multi-line="mode === 'multi-line'"
              :vertical="mode === 'vertical'"
              v-model="error"
            >
              {{ text }}
              <v-btn class="pink--text" text @click.native="error = false"
                >Закрыть</v-btn
              >
            </v-snackbar>
          </form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { userModule } from "@/store/modules/user";

@Component
export default class Login extends Vue {
  private email = "email@email.com";
  private pass = "102030Abc";
  private error = false;
  private text = "";

  public gotoDashboard() {
    this.$router.push("/");
  }

  public async login() {
    await userModule.signIn({ username: this.email, password: this.pass });
    this.$router.push("/");
  }
}
</script>
