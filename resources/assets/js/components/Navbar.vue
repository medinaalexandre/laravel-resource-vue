<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-info mb-2">
        <div class="container">
            <router-link :to="{name: 'home'}" class="navbar-brand">Home</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>