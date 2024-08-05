<template>
  <div class="flex space-x-2 items-center">
    <div v-if="showNextColorModeLabel" class="text-gray-500 text-xs">
      Change to {{ COLOR_MODES[nextColorModeIdx].name }}
    </div>
    <button
      class="hover:bg-gray-100 dark:hover:bg-gray-500 px-2 py-1 text-gray-500"
      @click="toggleColorMode"
      @mouseenter="showNextColorModeLabel = true"
      @mouseleave="showNextColorModeLabel = false"
    >
      {{ COLOR_MODES[nextColorModeIdx].icon }}
    </button>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const COLOR_MODES = [
  {
    name: "system",
    icon: "🌗",
  },
  {
    name: "light",
    icon: "🌕",
  },
  {
    name: "dark",
    icon: "🌑",
  },
];

const showNextColorModeLabel = ref(false);
const nextColorModeIdx = ref(0);

const updateNextColorModeIdx = () => {
  const currentColorModeIdx = COLOR_MODES.findIndex(
    (mode) => mode.name === colorMode.preference,
  );
  nextColorModeIdx.value = (currentColorModeIdx + 1) % COLOR_MODES.length;
};
// Nuxt 서버에서 로컬스토리지의 현재 컬러모드값에 접근할 수 없어서 hydration missmatch 에러 발생..
// 그래서 onMounted 컴포저블 사용하여 마운트되면 로직 수행
// 또는 그냥 컴포넌트를 <ClientOnly> 로 래핑해도 해결됨
onMounted(() => {
  updateNextColorModeIdx();
});

const toggleColorMode = () => {
  colorMode.preference = COLOR_MODES[nextColorModeIdx.value].name;
  updateNextColorModeIdx();
};
</script>
