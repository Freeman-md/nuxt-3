<template>
  <MovieSearch />
</template>

<script setup>
definePageMeta({
  middleware(to, from) {
    console.log(to, from)
  }
})
</script>