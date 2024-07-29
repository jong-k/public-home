<template>
  <div>
    <h2>Projects</h2>
    <section v-if="pending">Loading...</section>
    <!-- 틀린 것 같은 부분 -->
    <section v-else-if="error">Something went wrong... Try again!</section>
    <section v-else>Here we display the repos!</section>
  </div>
</template>

<script setup lang="ts">
const { error, status, data } = await useFetch(
  "https://api.github.com/users/jong-k/repos",
);
const pending = status.value === "pending";
console.log(data.value);
</script>
