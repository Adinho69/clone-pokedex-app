<script setup lang="ts">
import ButtonComponent from 'src/components/atoms/ButtonComponent.vue';
</script>

<template>
  <q-toolbar class="">
    <div class="col-5">
      <ButtonComponent label="Jogo" width-btn="140px" />
    </div>
    <div class="col-3 q-ml-md">
      <ButtonComponent label="Gen" width-btn="100px" />
    </div>
    <div class="col-4 items-center">
      <ButtonComponent class="q-ml-md" label="Tipo" width-btn="100px" />
    </div>
  </q-toolbar>
</template>

<style scoped></style>
