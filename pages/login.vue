<template>
    <form @submit.prevent="user.login">
        <h1>Login</h1>
        <label>
            Username
            <input type="text">
        </label>
        <label>
            Password
            <input type="text">
        </label>
        <button type="submit">Login</button>
    </form>
</template>

<script setup>
const user = useUser()

definePageMeta({
    layout: 'plain'
})
</script>