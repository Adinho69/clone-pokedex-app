<script setup lang="ts">
import { ref } from 'vue';
import { useComponentStore } from '../../stores/storeComponents';

const store = useComponentStore();
</script>

<template>
  <q-drawer v-model="store.drawer" show-if-above bordered> </q-drawer>
</template>

<style scoped></style>
