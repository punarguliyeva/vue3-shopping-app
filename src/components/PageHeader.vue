<template>
  <v-container fluid class="pa-0">
    <v-layout class="header">
      <v-card-title class="text-h4 text-md-h3 text-lg-h2 pt-16">
        {{ $t('main.title') }}
      </v-card-title>
    </v-layout>
  </v-container>
</template>

<style>
.header {
  background-image: url('/a.jpg');
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  justify-content: center;
}
</style>
