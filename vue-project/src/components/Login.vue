<template>
  <form class="hero is-fullheight" @submit.prevent="login">
          <div class="hero-body">
              <div class="container has-text-centered">
                  <div class="column is-4 is-offset-4">
                      <h3 class="title has-text-grey">Login</h3>
                      <p class="subtitle has-text-grey">Faça login para continuar</p>
                      <img class="is-rounded" style="border-radius: 50%; margin-bottom: 20px" :src="require('../assets/logotipo.png')">
                      <div class="box">

                          <form @submit.prevent="login">
                              <div class="field">
                                  <div class="control">
                                      <input class="input is-large" name="username" type="text" placeholder="Your Username" required autofocus v-model="nome">
                                  </div>
                              </div>

                              <div class="field">
                                  <div class="control">
                                      <input class="input is-large" name="password" type="password" placeholder="Your Password" required v-model="senha">
                                  </div>
                              </div>

                              <button type="submit" class="button is-block is-success is-large is-fullwidth">Login</button>
                          </form>
                      </div>
                      <p class="has-text-grey">
                          <a href="../">Precisa de ajuda?</a>
                      </p>
                  </div>
              </div>
          </div>
  </form>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export const AXIOS = axios.create({
  baseURL: 'http://localhost:8082',
  headers: {
    'Content-Type':'application/json'
  }
})
export default {
  name: 'login',
  data() {
    return {
      nome: '',
      senha: ''
    }
  },
  methods: {
    ...mapMutations([
      'setUsuario',
      'setToken',
      'setAdmin'
    ]),
    isAdmin(autorizacoes){
      for(var x=0;x<autorizacoes.length;x++){
        if(autorizacoes[x].authority=="ROLE_ADMIN"){
          return true;
        }
      }
      return false;
    },
    login() {
      axios.post('/springRest/logando',
          {
            username: this.nome,
            password: this.senha
          },
          {
            headers:{
              "Content-type":"application/json"
            }
          })
        .then(res => {
          console.log(res)
          this.setUsuario(res.data)
          this.setToken(res.headers.token)
          var admin = this.isAdmin(res.data.autorizacoes);
          this.setAdmin(admin);
          console.log(this.$store.state.token);
          this.$router.push('/Admin')
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
