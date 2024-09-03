<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
let id = ref(route.params.id);

let data = ref('');

const fetchData = async () => {
    if (id.value) {
        data.value = await fetch(`http://localhost:3000/movies/${id.value}`)
            .then(response => response.json())
            .then(data => {
                return data
        })
    }
};

onMounted(fetchData);

watch(() => route.params.id, (newId) => {
    id.value = newId;
    fetchData();
});
</script>

<template>
    <div>
        <h1>{{ data.title }}</h1>
        <p>{{ data.plot }}</p>
        <ul>
            <li v-for="element in data.genres">{{ element }}</li>
        </ul>
        <p>{{ data.released }}</p>
    </div>
</template>