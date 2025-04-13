<template>
  <FormGenerator :schema="schema" />
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { SchemaType } from "../types";

import FormGenerator from "../widgets/FormGenerator.vue";
const schema = ref<SchemaType[]>([]);

onMounted(() => {
  axios
    .get("http://109.73.199.236:3000/schema")
    .then((response) => {
      schema.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>
