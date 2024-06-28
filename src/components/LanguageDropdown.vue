<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">
        {{ $t(`langs.${$i18n.locale}`) }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="lang in $i18n.availableLocales"
        :key="lang"
        :title="$t(`langs.${lang}`)"
        @click="changeLang(lang)"
      />
    </v-list>
  </v-menu>
</template>

<script setup>
import { getLangFromLocal, setLangToLocal } from '@/utils'
import i18n from '../plugins/i18n'

function changeLang(lang) {
  i18n.global.locale = lang
  setLangToLocal(lang)
}

const lang = getLangFromLocal()
i18n.global.locale = lang || i18n.global.fallbackLocale
</script>
