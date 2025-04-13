<template>
  <v-container>
    <v-label>
      {{ fieldData.label }}
    </v-label>
    <v-select
      :multiple="fieldData.multiple"
      :items="fieldData.options"
      item-value="value"
      item-title="text"
      :required="fieldData.required"
    />
  </v-container>
</template>

<script setup lang="ts">
import { FieldType } from "../types";
const { fieldData } = defineProps<FieldType>();
</script>
