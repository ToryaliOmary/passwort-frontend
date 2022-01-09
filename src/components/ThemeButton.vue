<template>
  <div class="container-center">
    <div class="card">
        <span> Mit dem Emory Passwortmanager sind Ihre Daten besonders sicher! </span>
        <div
          class="switch-toggle"
          :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
        ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemeButton'
}
</script>

<style scoped>
.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}
</style>
