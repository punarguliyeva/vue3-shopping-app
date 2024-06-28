<template>
  <PageHeader />
  <v-container>
    <CardCarousel />
    <v-card class="pa-4 mt-4" color="secondary">
      <v-row v-if="products?.length">
        <v-col v-for="product in products" :key="product.id" cols="12" md="3" sm="6">
          <ProductCard
            :to="`/products/${product.id}`"
            :title="product.title"
            :subtitle="product.description"
            :pic="product.image"
            :price="product.price"
            @plusClicked="basketStore.incProduct(product.id)"
          />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col v-for="n in 6" :key="n" cols="12" md="3" sm="6">
          <v-skeleton-loader
            class="mx-auto border"
            max-width="300"
            type="card-avatar, actions"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { getProducts } from '@/services'
import useBasketStore from '@/stores/basket'
import ProductCard from '@/components/ProductCard.vue'
import CardCarousel from '@/components/CardCarousel.vue'
import PageHeader from '@/components/PageHeader.vue'

const basketStore = useBasketStore()
const products = ref(null)

getProducts().then((res) => (products.value = res))
</script>
