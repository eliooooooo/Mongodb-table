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
        <button @click="previousPage">Previous</button>
        <span>Page {{ currentPage }}</span>
        <button @click="nextPage">Next</button>
    </div>
</template>

<script>
</script>
