<template>
  <form class="row g-3">
    <p> </p>
    <div class=" row-cols-md-6" >
      <label for="webseite" class="form-label">Webseite</label>
      <input type="website" id="webseite" v-model="webseite" required>
    </div>
    <div class="row-cols-md-6">
      <label for="inputPassword" class="form-label">Passwort</label>
      <input type="password" id="inputPassword" v-model="passwort" required>
    </div>
    <div class="row-cols-md-6">
      <label for="passwortCheck" class="form-label">Passwort-Check</label>
      <input type="password" id="passwordCheck" v-model="passwortCheck" required>
    </div>
      <div class="row-cols-md-6" >
        <label class="row-cols-md-6" for="arbeitsbereich">Arbeitsbereich</label>
        <select class="custom-select" type="text" id="arbeitsbereich" v-model="arbeitsbereich" required>
          <option selected>Wähle Aus</option>
          <option value="Privat">Privat</option>
          <option value="Beruf">Beruf</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </div>
    <p> </p>
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
            if (arbeitsbereich === 'Privat' || arbeitsbereich === 'Beruf' || arbeitsbereich === 'Sonstiges' || arbeitsbereich !== 'Wähle Aus') {
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
      } else {
        alert('Bitte prüfen Sie  die Eingaben. Jedes Feld muss befüllt werden!')
      }
    },
    input () {
      const drop = document.getElementById('arbeitsbereich').value
      if (drop !== '') {
        return drop
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
