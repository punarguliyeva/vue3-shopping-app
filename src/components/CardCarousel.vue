<template>
  <v-slide-group show-arrows class="card-carousel d-flex flex-nowrap">
    <v-card v-for="i in 6" :key="i" class="mx-1 slide-item" outlined>
      <v-img height="150px" :src="`./${i}.jpg`" cover />
    </v-card>
  </v-slide-group>
</template>

<style lang="scss" scoped>
.card-carousel {
  .slide-item {
    width: 300px;
  }
  :deep(.v-slide-group__content) {
    justify-content: center;
  }
}
</style>
