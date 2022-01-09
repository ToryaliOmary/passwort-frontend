<template>
  <NavBar>  </NavBar>
  <router-view/>
  <ThemeButton></ThemeButton>
</template>

<script>
import NavBar from '@/components/NavBar'
import ThemeButton from '@/components/ThemeButton'

export default {
  name: 'App',
  components: { NavBar, ThemeButton },
  data () {
    return {
      userTheme: 'light-theme'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
