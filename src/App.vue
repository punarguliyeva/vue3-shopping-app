<template>
  <v-responsive>
    <v-app :theme="themeStore.theme">
      <NavBar />
      <v-main>
        <RouterView />
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import useThemeStore from './stores/theme'

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>
.basket {
  position: relative;
  &-count {
    position: absolute;
    top: 0;
    right: 0;
    background-color: yellowgreen;
  }
}
</style>
