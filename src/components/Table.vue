<script setup>
defineProps({
    data: Object
})
</script>

<template>
    <table>
        <thead>
            <tr>
                <th scope="col" class="little">Title</th>
                <th scope="col">Plot</th>
                <th scope="col" class="little">Genres</th>
                <th scope="col" class="little">Released</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="movie in data" :key="movie._id">
                <td class="little">{{ movie.title }}</td>
                <td>{{ movie.plot }}</td>
                <td class="little">{{ movie.genres.join(', ') }}</td>
                <td class="little">{{ movie.released }}</td>
                <td><a :href="`/movie/${movie._id}`">Details</a></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ccc;
        margin-bottom: 40px;
    }

    td {
        border: 1px solid #ccc;
        padding: 0.5rem;
    }

    .little {
        width: 15%;
    }

    th{
        background-color: #f2f2f2;
        color: #333;
        padding: 0.5rem;
    }
</style>