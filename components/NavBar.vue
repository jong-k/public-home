<template>
  <nav class="nanum-gothic-coding-regular">
    <ul class="flex space-x-4">
      <li>
        <NuxtLink to="/" class="link">Main</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="link">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="link">Blog</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<!-- scoped: 해당 컴포넌트에만 적용되는 스타일 -->
<script setup></script>
<style scoped>
.link {
  @apply p-1 hover:bg-gray-200;
}
</style>
