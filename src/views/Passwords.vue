<template>
  <div class="Passwords">
    <img alt="NewLogo" src="../assets/NewLogo.png">
    <h1>Manage jetzt sicher und verschlüsselt deine Kontodaten.</h1>
    <h1>Tippe hier!</h1>
    <Accordion> </Accordion>
    <a href="http://localhost:3000/NewPassword">New Password</a>
  </div>
</template>

<script>

import Accordion from '@/components/Accordion'
export default {
  name: 'Passwords',
  components: { Accordion }
}
</script>
