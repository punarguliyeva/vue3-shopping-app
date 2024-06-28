import { ref } from 'vue'
import { defineStore } from 'pinia'

const useThemeStore = defineStore('theme', () => {
  const theme = ref('light')

  function changeTheme(newTheme) {
    theme.value = newTheme
  }

  return { theme, changeTheme }
})

export default useThemeStore
