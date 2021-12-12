<template>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Webseite</label>
    <div class="col-sm-10">
      <input type="text"  class="form-control-plaintext" value="www.Example.de">
    </div>
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Passwort</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Passwort erneut eingeben</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Arbeitsbereich eingeben</label>
    <div class="col-sm-10">
      <input type="text" class="form-control">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input'
}
</script>

<style scoped>

</style>
