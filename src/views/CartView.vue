<template>
  <v-container>
    <h2>{{ $t('cart.title') }}</h2>
    <v-list v-if="products.length" class="cart-list">
      <v-card v-for="(product, i) in products" :key="i" :to="`/products/${product.id}`">
        <v-list-item :value="product.value" :to="product.value">
          <template #prepend>
            <v-img :src="product.image" width="50" height="50" class="mr-4" />
          </template>
          <v-list-item-title class="basket-item">
            {{ product.title }}
            <v-badge :content="basketStore.basket[product.id]" color="primary" inline />
          </v-list-item-title>
          <template #append>
            <v-btn
              color="primary"
              icon="mdi-delete"
              variant="text"
              @click.stop.prevent="removeProduct(product.id)"
            />
          </template>
        </v-list-item>
      </v-card>
    </v-list>
    <div v-else>
      {{ $t('cart.noItems') }}
    </div>
  </v-container>
</template>

<script setup>
import { reactive } from 'vue'
import { getListedProducts } from '@/services'
import useBasketStore from '@/stores/basket'

const basketStore = useBasketStore()
const products = reactive([])

function removeProduct(id) {
  basketStore.removeProduct(id)
  const index = products.findIndex((product) => product.id === id)
  products.splice(index, 1)
}

getListedProducts(Object.keys(basketStore.basket)).then((res) => Object.assign(products, res))
</script>

<style lang="scss" scoped>
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .basket-item {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
</style>
