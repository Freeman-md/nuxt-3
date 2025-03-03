<script setup>
const route = useRoute()

const { data } = useFetch(`https://www.omdbapi.com/?apikey=c636c52f&i=${route.params.id}`, {
  pick: ["Plot", "Title"],
  key: `/movies/${route.params.id}`
}) 
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped></style>
