<template>
  <div>
    <p class="mb-10">Github Projects</p>
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again!</section>
    <section v-else>
      <ul class="grid gird-cols-1 gap-4">
        <li
          v-for="repository in data"
          :key="repository.id"
          class="border border-gray-200 rounded-sm p-4 hover:bg-gray-200 nanum"
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
const { error, status, data } = await useFetch(
  "https://api.github.com/users/jong-k/repos",
);
const pending = status.value === "pending";
console.log(data.value);
</script>
