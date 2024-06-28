<template>
  <v-app-bar density="compact" prominent color="primary">
    <v-container class="container">
      <v-app-bar-title class="cursor-pointer primary" @click="goToHome">
        {{ $t('navbar.myStore') }}
      </v-app-bar-title>
      <v-spacer />
      <LanguageDropdown />
      <v-btn :prepend-icon="`mdi-weather-${themeIcon}`" slim @click="toggleTheme" />
      <v-badge
        offset-x="7"
        offset-y="7"
        :model-value="Boolean(productCount)"
        :content="productCount"
      >
        <v-btn icon="mdi-cart" variant="text" :to="{ name: 'cart' }" />
      </v-badge>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import LanguageDropdown from '@/components/LanguageDropdown.vue'
import useThemeStore from '@/stores/theme'
import useBasketStore from '@/stores/basket'

const router = useRouter()
const basketStore = useBasketStore()
const themeStore = useThemeStore()

basketStore.getFromLocalStorage()

function toggleTheme() {
  const newTheme = themeStore.theme === 'light' ? 'dark' : 'light'
  themeStore.changeTheme(newTheme)
}
function goToHome() {
  router.push('/')
}
const productCount = computed(() => {
  const arr = Object.values(basketStore.basket)
  return arr.reduce((total, num) => total + num, 0)
})
const themeIcon = computed(() => (themeStore.theme === 'light' ? 'sunny' : 'night'))
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
}
</style>
