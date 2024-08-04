<template>
  <div>
    <h2>This page is about me.</h2>
    <!--    <button @click="enableDefaultLayout">Update Layout to Default</button>-->
    <!--    <button @click="enableCustomLayout">Update Layout to Another</button>-->
  </div>
</template>

<script setup lang="ts">
// const enableDefaultLayout = () => {
//   setPageLayout("default");
// };
//
// const enableCustomLayout = () => {
//   setPageLayout("another");
// };
//
// definePageMeta({
//   layout: false,
// });

useHead({
  // titleTemplate을 통해 동적으로 Head 정보 적용
  // %s: 현재 적용중인 기본 페이지 타이틀
  titleTemplate: "About",
});
</script>
