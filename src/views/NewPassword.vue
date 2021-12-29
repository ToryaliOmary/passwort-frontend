<template>
  <div class="NewPassword">
    <img alt="NewLogo" src="../assets/NewLogo.png">
    <p></p>
    <h1> Erstellen Sie hier ein neues Passwort</h1>
    <p></p>
    <Input> </Input>
    <p></p>
    <form method="get" action="/passwords">
      <button col="blue" type="submit" class="btn btn-primary">Zurück</button>
    </form>
  </div>
</template>

<script>
import Input from '@/components/Input'
export default {
  name: 'NewPassword',
  components: { Input }
}
</script>

<style scoped>

</style>
