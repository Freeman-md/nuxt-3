<template>
    <nav style="display: flex; gap: 10px;">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/movies">Movies</NuxtLink>
        <NuxtLink to="https://vueschool.io">Vue School</NuxtLink>
    </nav>

    <slot></slot>
</template>