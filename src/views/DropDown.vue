<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelect01">Options</label>
    </div>
    <select class="custom-select" @click.prevent = "input()" id="inputGroupSelect01">
      <option selected>Wähle Aus</option>
      <option value="Privat">Privat</option>
      <option value="Beruf">Beruf</option>
      <option value="Sonstiges">Sonstiges</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  methods: {
    input () {
      const pw1 = document.getElementById('inputGroupSelect01').value
      if (pw1 !== '') {
        return pw1
      }
    }
  }

}
</script>

<style scoped>

</style>
