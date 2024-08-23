<script setup>
    const props = defineProps({
        currentPage: {
            type: Number,
            required: true
        }
    });

    function previousPage() {
        if (props.currentPage > 1) {
            document.location.search = `?page=${props.currentPage-1}`;
        }
    }

    function nextPage() {
        document.location.search = `?page=${props.currentPage+1}`;
    }
</script>

<template>
    <div>
        <button :disabled="currentPage === 1" @click="previousPage">Previous</button>
        <span>Page {{ currentPage }}</span>
        <button @click="nextPage">Next</button>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
        background-color: #fff;
        color: #333;
        cursor: pointer;
        transition: all 0.3s;
    }

    button:disabled {
        border: none;
        background-color: #333;
        color: #585858;
        cursor: not-allowed;
    }

    button:hover {
        background-color: #9e9e9e;
    }
</style>
