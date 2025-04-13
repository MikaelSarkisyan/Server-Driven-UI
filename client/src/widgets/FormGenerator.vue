<template>
  <form class="form">
    <component
      v-for="(field, index) in schema"
      :key="index"
      :is="components[field.fieldType]"
      :fieldData="field"
    />
  </form>
</template>

<script setup lang="ts">
import { GeneratorProps } from "../types";
import Input from "../entities/Input.vue";
import SelectList from "../entities/SelectList.vue";
import Button from "../entities/Button.vue";
import Checkbox from "../entities/Checkbox.vue";

const { schema } = defineProps<GeneratorProps>();

const components: Record<string, any> = {
  Text: Input,
  Email: Input,
  Password: Input,
  SelectList: SelectList,
  Checkbox: Checkbox,
  Submit: Button,
};
</script>

<style scoped>
.form {
  border: 2px solid black;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
}
</style>
