<script setup>
import Table from './../components/Table.vue'
import Pagination from './../components/Pagination.vue';

import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
let page = ref(route.params.page);

let data = ref('');

const fetchData = async () => {
    if (page.value) {
        data.value = await fetch(`http://localhost:3000/movies?page=${page.value}`)
            .then(response => response.json())
            .then(data => {
                return data
        })
    }
};

onMounted(fetchData);

watch(() => route.params.page, (newPage) => {
    page.value = newPage;
    fetchData();
});
</script>

<template>
    <div>
        <h1>Movies content</h1>
        <Table :data="data"></Table>
        <Pagination :page="Number(page)"></Pagination>
    </div>
</template>