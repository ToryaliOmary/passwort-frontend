<template>
  <div class="DeletePassword">
    <img alt="NewLogo" src="../assets/NewLogo.png">
    <h1>Hier kannst du eine deiner Einheiten löschen.</h1>
    <h4>Achtung! Gelöschte Einheiten können nicht wiederhergestellt werden!</h4>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Privat
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>
                <table class="table">
                  <thead>
                  <tr>
                    <th scope="col">  </th>
                    <th scope="col">Website</th>
                    <th scope="col">Passwort</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class = "col" v-for="passwort in password" :key="passwort.id">
                    <ts>{{ }}</ts>
                    <td>{{ passwort.website}}</td>
                    <td>{{ passwort.passwort }}</td>
                    <d><button class="btn btn-danger" @click.prevent="removePassword(passwort.id)">Löschen</button></d>
                  </tr>
                  </tbody>
                </table>
            </strong>
          </div>
        </div>
      </div>
    </div>
    <form method="get" action="/passwords">
      <button col="blue" type="submit" class="btn btn-primary">Zurück</button>
    </form>
    <div>
    </div>
   </div>
</template>

<script>

export default {
  name: 'DeletePassword',
  data () {
    return {
      password: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/passwort'
    const requestOption = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOption)
      .then(response => response.json())
      .then(result => result.forEach(passwort => {
        this.password.push(passwort)
      }))
      .catch(error => console.log('error', error))
  },
  methods: {
    removePassword (id) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/passwort/' + id
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const playload = JSON.stringify({
        id: this.id,
        website: this.webseite,
        passwort: this.passwort,
        arbeitsbereich: this.arbeitsbereich
      })

      const requestOptions = {
        method: 'DELETE',
        headers: headers,
        body: playload,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(() => {
          this.$router.push('/passwords')
        })
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
</style>
