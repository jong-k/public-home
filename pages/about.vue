<template>
  <div>
    <h2>This page is about me.</h2>
    <button @click="enableDefaultLayout">Update Layout to Default</button>
    <button @click="enableCustomLayout">Update Layout to Another</button>
  </div>
</template>

<script setup lang="ts">
const enableDefaultLayout = () => {
  setPageLayout("default");
};

const enableCustomLayout = () => {
  setPageLayout("another");
};

definePageMeta({
  layout: false,
});
</script>
