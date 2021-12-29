<template>
  <form class="row g-3">
    <p> </p>
    <div class=" row-cols-md-6" >
      <label for="webseite" class="form-label">Webseite</label>
      <input type="website" class="form-control" id="webseite" v-model="webseite">
    </div>
    <div class="col-md-6">
      <label for="inputPassword" class="form-label">Passwort</label>
      <input type="text" class="form-control" id="inputPassword" v-model="passwort">
    </div>
    <div class="col-md-6">
      <label for="passwortCheck" class="form-label">Passwort-Check</label>
      <input type="text" class="form-control" id="passwordCheck" v-model="passwortCheck">
    </div>
    <div class="row-cols-md-6">
      <label for="arbeitsbereich" class="form-label">Arbeitsbereich</label>
      <input type="text" class="form-control" id="arbeitsbereich" v-model="arbeitsbereich">
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary" @click.prevent="checkPasswords" >Bestätigen</button>
    </div>
  </form>
</template>

<script>

export default {
  name: 'Input',
  data () {
    return {
      webseite: '',
      passwort: '',
      passwortCheck: '',
      arbeitsbereich: ''
    }
  },
  methods: {
    checkPasswords () {
      const pw1 = document.getElementById('inputPassword').value
      const pw2 = document.getElementById('passwordCheck').value
      const website = document.getElementById('webseite').value

      if (website !== '') {
        if (pw1 !== pw2) {
          alert('Passwörter müssen gleich sein!')
          console.log('falsches PW')
          return false
        } else if (pw1 === '' || pw2 === 'null') {
          alert('Leeres Passwortfeld. Bitte Felder befüllen!')
          console.log('leeres Passwortfeld')
          return false
        } else if (pw1 === pw2) {
          this.createPassword()
          return true
        }
      } else {
        alert('leeres Webseitenfeld.!')
        console.log('falsches PW')
        return false
      }
    },
    createPassword () {
      console.log(this.webseite)
      console.log(this.passwort)
      console.log(this.passwortCheck)
      console.log(this.arbeitsbereich)

      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/passwort'
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const playload = JSON.stringify({
        website: this.webseite,
        passwort: this.passwort,
        arbeitsbereich: this.arbeitsbereich
      })

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: playload,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>
