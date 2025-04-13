<template>
  <v-container>
    <v-checkbox :label="fieldData.label" :required="fieldData.required" />
  </v-container>
</template>

<script setup lang="ts">
import { FieldType } from "../types";
const { fieldData } = defineProps<FieldType>();
</script>
