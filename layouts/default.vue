<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt-5">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
          >김종한</NuxtLink
        >
      </div>
      <NavBar />
    </header>
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
import NavBar from "~/components/NavBar.vue";

useHead({
  // titleTemplate을 통해 동적으로 Head 정보 적용
  // %s: 현재 적용중인 기본 페이지 타이틀
  titleTemplate: "%s - 김종한",
});
</script>
