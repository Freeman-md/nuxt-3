<script setup lang="ts">
const nuxtApp = useNuxtApp()
const KEY = 'test';
const { data: data } = await useAsyncData(KEY, async () => {
  console.log('test');
  return {};
}, {
  getCachedData(key) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});
const { data: data2 } = await useAsyncData(KEY, async () => {
  console.log('test');
  return {};
},  {
  getCachedData(key) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});
const { data: data3 } = await useAsyncData(KEY, async () => {
  console.log('test');
  return {};
},  {
  getCachedData(key) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});

</script>

<template>
  <div>
    Page: Index
  </div>
</template>

<style scoped></style>
