<script setup lang="ts">
import ToolbarSuperior from 'src/components/molecules/ToolbarSuperiorComponent.vue';
import ToolbarInferior from 'src/components/molecules/ToolbarInferiorComponent.vue';
import Drawer from 'src/components/organisms/DrawerComponent.vue';
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="q-px-sm bg-white text-black">
      <ToolbarSuperior />
      <ToolbarInferior />
    </q-header>
    <Drawer />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped></style>
