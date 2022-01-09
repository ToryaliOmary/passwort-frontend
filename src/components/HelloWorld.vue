<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> Bitte loggen Sie sich ein!</h2>
    <p></p>
    <p></p>
    <input type="password" id="initial" v-model="initial" required>
    <p></p>
    <p></p>
    <form method="get" action="/passwords">
      <button col="blue" type="submit" @click.prevent="checkInitial()">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    checkInitial () {
      const eingabe = document.getElementById('initial').value
      if (eingabe === process.env.VUE_APP_INITIAL_KENNWORT) {
        this.$router.push('/passwords')
      } else {
        alert('Falsches Passwort. Bitte überprüfen Sie ihre Eingabe!')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
