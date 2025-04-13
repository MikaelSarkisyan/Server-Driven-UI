<template>
  <v-container>
    <v-label :for="fieldData.name">
      {{ fieldData.label }}
    </v-label>
    <v-text-field
      :type="fieldData.fieldType.toLowerCase()"
      :name="fieldData.name"
      :id="fieldData.name"
      :placeholder="fieldData.placeholder"
      :minlength="fieldData.minLength"
      :required="fieldData.required"
    />
  </v-container>
</template>

<script setup lang="ts">
import { FieldType } from "../types";
const { fieldData } = defineProps<FieldType>();
</script>
