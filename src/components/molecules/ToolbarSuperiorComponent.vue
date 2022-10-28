<script setup lang="ts">
import { useComponentStore } from '../../stores/storeComponents';

const store = useComponentStore();
</script>

<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="store.toggleLeftDrawer"
    />

    <q-toolbar-title> Pokédex </q-toolbar-title>
  </q-toolbar>
</template>

<style scoped></style>
