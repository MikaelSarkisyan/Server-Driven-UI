<template>
  <v-container class="d-flex justify-center">
    <v-btn
      :name="fieldData.name"
      :required="fieldData.required"
      :type="fieldData.fieldType"
    >
      {{ fieldData.text }}
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { FieldType } from "../types";
const { fieldData } = defineProps<FieldType>();
</script>
