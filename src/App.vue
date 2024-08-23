<script setup>
import Table from './components/Table.vue';
import Pagination from './components/Pagination.vue';

// La pagination passe encore par un refresh de page, il faudrait passer la page en props
// ainsi que de relancer la requete à l'api pour récupérer les films de la page demandée
let params = new URLSearchParams(document.location.search);
let currentPage = params.get("page") ? parseInt(params.get("page"), 10) : 1;
</script>

<template>
  <div>
    <h1>Liste des films</h1>
    <Table :currentPage="currentPage"></Table>
    <Pagination :currentPage="currentPage"></Pagination>
  </div>
</template>

<script>
</script>