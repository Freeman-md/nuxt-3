<script setup>
const route = useRoute()

const { data } = useAsyncData(`/movies/${route.params.id}`, () => {
  return $fetch(`https://www.omdbapi.com/?apikey=c636c52f&i=${route.params.id}`)
}) 
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped></style>
