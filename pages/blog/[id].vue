<template>
  <div>
    <h2>We are inside a blog!</h2>
    <h3>Post id is {{ route.params.id }}</h3>
  </div>
</template>

<script setup lang="ts">
// useRoute 컴포서블
const route = useRoute();
console.log(route);
</script>
