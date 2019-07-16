<template>
    <div>
        <h1>Vue Router Demo App</h1>

        <p>
            <router-link :to="{ name: 'home' }">Articles</router-link> |
            <router-link :to="{ name: 'article' }">Single Article</router-link>
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {}
</script>