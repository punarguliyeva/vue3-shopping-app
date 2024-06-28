<template>
  <v-snackbar v-model="model" timeout="2000" color="primary">
    {{ $t('product.productAdded') }}
  </v-snackbar>
</template>

<script setup>
const model = defineModel()
</script>

<style lang="scss" scoped></style>
