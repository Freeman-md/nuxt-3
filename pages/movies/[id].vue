<script setup>
const route = useRoute()

const { data, error } = await useFetch(`https://www.omdbapi.com/?apikey=c636c52f&i=${route.params.id}`, {
  pick: ["Plot", "Title", "Error"],
  key: `/movies/${route.params.id}`,
}) 

if (error.value) {
  // handle accordingly
}

if (data.value.Error == "Incorrect IMDb ID.") {
      showError({
        statusCode: 404,
        statusMessage: "Page Not Found"
      })
    }
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped></style>
