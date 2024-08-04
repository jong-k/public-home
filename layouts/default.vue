<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt-5">
      <div class="flex items-center space-x-9">
        <div>
          <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
            >김종한</NuxtLink
          >
        </div>
        <NavBar />
      </div>
      <ColorModeSelector />
    </header>
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
// 생략 가능
// import NavBar from "~/components/NavBar.vue";

useHead({
  // titleTemplate을 통해 동적으로 Head 정보 적용
  // %s: 현재 적용중인 기본 페이지 타이틀
  titleTemplate: "%s - 김종한",
});
</script>

<style>
.nanum-gothic-regular {
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.nanum-gothic-coding-regular {
  font-family: "Nanum Gothic Coding", monospace;
  font-weight: 400;
  font-style: normal;
}

body {
  @apply nanum-gothic-regular bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
