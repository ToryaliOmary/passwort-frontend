<template>
  <div class="Passwords">
    <img alt="NewLogo" src="../assets/NewLogo.png">
    <h1>Manage jetzt sicher und verschlüsselt deine Kontodaten.</h1>
    <h1>Tippe hier!</h1>
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
                  <div class = "col" v-for="passwort in password" :key="passwort.id">
                  <table class="table">
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Website</th>
                      <th scope="col">Passwort</th>
                      <th scope="col">Arbeitsbereich</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>{{ passwort.id }}</td>
                      <td>{{ passwort.website}}</td>
                      <td>{{ passwort.passwort }}</td>
                      <td>{{ passwort.arbeitsbereich }}</td>
                    </tr>
                    </tbody>
                  </table>
                  </div>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    <a href="http://localhost:3000/NewPassword">New Password</a>
</template>

<script>
export default {
  name: 'Passwords',
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
  }
}
</script>

<style scoped>
</style>
