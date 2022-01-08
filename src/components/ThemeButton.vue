<template>
  <div class="container-center">
    <div class="card">
      <input
        @change="toggleTheme"
        id="checkbox"
        type="checkbox"
        class="switch-checkbox"
      />
      <label for="checkbox" class="switch-label">
        <span> 🌙 </span>
        <span> ☀️</span>
        <div
          class="switch-toggle"
          :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
        ></div>
      </label>
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
