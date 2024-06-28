<template>
  <v-card class="product-card mx-auto" max-width="400">
    <v-container>
      <v-img class="align-end text-white" height="100" :src="props.pic" />
      <v-card-title class="title">{{ props.title }}</v-card-title>
      <v-card-subtitle class="pt-4"> {{ props.subtitle }}</v-card-subtitle>
      <v-card-subtitle class="price"> ${{ props.price }}</v-card-subtitle>
      <v-btn class="plus-btn" icon="mdi-plus" size="small" @click.stop.prevent="plusClicked" />
    </v-container>
    <SnackBar v-model="showSnack" />
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import SnackBar from '@/components/SnackBar.vue'

const emit = defineEmits(['plusClicked'])
const showSnack = ref(false)

const props = defineProps({
  title: String,
  subtitle: String,
  price: Number,
  pic: String
})

function plusClicked() {
  emit('plusClicked')
  showSnack.value = true
}
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  padding: 8px;
  .plus-btn {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }

  .title {
    font-weight: bold;
    text-decoration-style: none;
  }
  .price {
    font-size: x-large;
    font-weight: bold;
  }
}
</style>
