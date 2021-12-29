<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> Bitte loggen Sie sich ein!</h2>
    <p></p>
    <p></p>
    <input v-model="test123" placeholder="Passwort" />
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <form method="get" action="/passwords">
      <button col="blue" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
