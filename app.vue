<template>
  <!-- NuxtLayout이 최상단에 있지 않으면 리렌더링 발생 -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Public Home",
  description: "My public homepage",
  ogTitle: "Public Home",
  ogDescription: "My public homepage",
  // ogImage: "[og:image]",
  // ogUrl: "[og:url]",
  // twitterTitle: "[twitter:title]",
  // twitterDescription: "[twitter:description]",
  // twitterImage: "[twitter:image]",
  // twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "ko",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Nanum+Gothic+Coding&display=swap",
      crossorigin: "",
    },
  ],
});
</script>
