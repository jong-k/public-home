<template>
  <div>
    <p class="mb-10">Github Projects</p>
    <section v-if="status === 'pending' || status === 'idle'">Loading...</section>
    <section v-else-if="status === 'error'">Something went wrong... Try again!</section>
    <section v-else>
      <ul class="grid gird-cols-1 gap-4">
        <li
          v-for="repository in repos"
          :key="repository.id"
          class="border border-gray-200 rounded-sm p-4 hover:bg-gray-200"
        >
          <a :href="repository['html_url']" target="_blank">
            <div class="flex items-center justify-between text-sm">
              <div class="font-semibold">{{ repository.name }}</div>
              <div>{{ repository["stargazers_count"] }} *</div>
            </div>
            <p class="text-sm mt-1">{{ repository.description }}</p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const { status, data } = await useFetch("https://api.github.com/users/jong-k/repos", {
  // 로딩중 UI 확인하고 싶을 때
  // server: false,
  // timeout: 3000,
});

const repos = computed(() =>
  data.value
    .filter((repo) => repo.description)
    .sort((a, b) => b["stargazers_count"] - a["stargazers_count"]),
);
</script>
