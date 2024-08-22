<script setup>

</script>

<template>
    <table>
        <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Plot</th>
                <th scope="col">Genres</th>
                <th scope="col">Released</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="movie in movies" :key="movie._id">
                <td>{{ movie.title }}</td>
                <td>{{ movie.plot }}</td>
                <td>{{ movie.genres.join(', ') }}</td>
                <td>{{ movie.released }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        currentPage: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            movies: []
        };
    },
    created() {
        this.fetchMovies();
    },
    methods: {
        async fetchMovies() {
            try {
                console.log('Fetching movies...');
                let response;
                if(this.currentPage > 1) {
                    response = await axios.get(`http://localhost:3000/movies?page=${this.currentPage}`);
                } else {
                    response = await axios.get('http://localhost:3000/movies');
                }
                console.log('Movies fetched:', response.data);
                this.movies = response.data;
            } catch (error) {
                console.error('Erreur lors de la récupération des films:', error);
            }
        }
    }
};
</script>

<style scoped></style>