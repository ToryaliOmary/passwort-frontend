<template>
  <div class="home">
    <img alt="NewLogo" src="../assets/NewLogo.png">
    <p></p>
    <HelloWorld msg="Willkommen zum Passwort Manager!"/>
    <p></p>
    <p></p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
