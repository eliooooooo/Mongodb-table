<script setup>
import router from './router';

import Table from './components/Table.vue';
import Pagination from './components/Pagination.vue';
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/list/1">Movies</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  nav a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
  }
</style>