<template>
  <v-container>
    <div v-if="!product" class="loading">Loading...</div>
    <div v-else>
      <v-row>
        <v-col sm="4" lg="2">
          <v-img :src="product.image" cover class="img" />
        </v-col>
        <v-col sm="8" lg="10">
          <v-card-title class="title">{{ product.title }}</v-card-title>
          <v-card-subtitle class="pt-4"> {{ product.description }}</v-card-subtitle>
          <v-card-text> ${{ product.price }}</v-card-text>
        </v-col>
        <v-btn @click="addToCart(product.id)">{{ $t('product.addToCart') }}</v-btn>
      </v-row>
    </div>
    <SnackBar v-model="showSnack" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getProduct } from '@/services'
import SnackBar from '@/components/SnackBar.vue'
import useBasketStore from '@/stores/basket'

const route = useRoute()
const basketStore = useBasketStore()
const product = ref(null)
const showSnack = ref(false)

function addToCart(productId) {
  basketStore.incProduct(productId)
  showSnack.value = true
}
getProduct(route.params.id).then((res) => (product.value = res))
</script>
