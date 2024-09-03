<script setup>
defineProps({
    page: Number
})
</script>

<template>
    <div>
        <a :href="`/list/${page-1}`" :class="page <= 1 ? 'hidden' : '' ">Previous</a>
        <span>Page {{ page }}</span>
        <a :href="`/list/${page+1}`">Next</a>
    </div>
</template>

<style scoped>
    .hidden {
        display: none;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    a {
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
        background-color: #fff;
        color: #333;
        cursor: pointer;
        transition: all 0.3s;
    }

    a:hover {
        background-color: #9e9e9e;
    }
</style>
