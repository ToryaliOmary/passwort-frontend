<template>
  <form class="row g-3">
    <p> </p>
    <div class=" row-cols-md-6" >
      <label for="webseite" class="form-label">Webseite</label>
      <input type="website" class="form-control" id="webseite" v-model="webseite" required>
    </div>
    <div class="col-md-6">
      <label for="inputPassword" class="form-label">Passwort</label>
      <input type="password" class="form-control" id="inputPassword" v-model="passwort" required>
    </div>
    <div class="col-md-6">
      <label for="passwortCheck" class="form-label">Passwort-Check</label>
      <input type="password" class="form-control" id="passwordCheck" v-model="passwortCheck" required>
    </div>
    <div class="row-cols-md-6">
      <label for="arbeitsbereich" class="form-label">Arbeitsbereich</label>
      <input type="text" class="form-control" id="arbeitsbereich" v-model="arbeitsbereich" required>
    </div>
    <form class="col-12" action="/Passwords">
      <button type="submit" class="btn btn-primary" @click.prevent="validateInput(passwort.id)" >Bestätigen</button>
    </form>
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
    validateInput () {
      const pw1 = document.getElementById('inputPassword').value
      const pw2 = document.getElementById('passwordCheck').value
      const website = document.getElementById('webseite').value
      const arbeitsbereich = document.getElementById('arbeitsbereich').value
      console.log(arbeitsbereich)
      if (website !== '') {
        if (pw1 !== '' && pw2 !== '') {
          if (arbeitsbereich !== '') {
            return this.checkPasswords()
          } else {
            alert('Bitte prüfen Sie  die Eingaben. Jedes Feld muss befüllt werden!')
          }
        } else {
          alert('Bitte prüfen Sie  die Eingaben. Jedes Feld muss befüllt werden!')
        }
      } else {
        alert('Bitte prüfen Sie  die Eingaben. Jedes Feld muss befüllt werden!')
      }
    },
    // Prüfung ob beide Passwörter übereinstimmen und dass das Website Feld ausgefüllt ist
    checkPasswords () {
      const pw1 = document.getElementById('inputPassword').value
      const pw2 = document.getElementById('passwordCheck').value
      if (pw1 !== pw2) {
        return alert('Passwörter müssen gleich sein!')
      } else if (pw1 === '' || pw2 === 'null') {
        return alert('Passwörter müssen gleich sein!')
      } else if (pw1 === pw2) {
        return this.createPassword()
      }
    },
    // Passwort wird erstellt
    createPassword () {
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
        .then(() => {
          this.$router.push('/passwords') // Nach Erstellung des Passwortes wird man zurückgeworfen auf die Password-Seite
        })
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>
