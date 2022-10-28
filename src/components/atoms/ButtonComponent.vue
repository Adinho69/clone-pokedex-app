<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  label: string;
  widthBtn: string;
}
const props = defineProps<Props>();
</script>

<template>
  <q-btn
    class="bg-grey-4"
    :style="{ width: props.widthBtn }"
    unelevated
    rounded
    :label="props.label"
  >
  </q-btn>
</template>

<style lang="scss" scoped></style>
