<template>
    <div class="intro">
        <h1>MongoDB Table</h1>
        <p>Welcome to MongoDB Table! This project is a pedagogical endeavor aimed at learning Vue.js and MongoDB. 
        The project is a simple table that displays data from a MongoDB database. The table is paginated and the data is fetched from the database using an API.
        </p>
        <RouterLink to="/list/1" class="full">Check content !</RouterLink>
    </div>
</template>

<style scoped >
    p {
        max-width: 600px;
        margin: auto;
    }

    a {
        background-color: #646cff;
        color: #242424;
        padding: 0.75rem;
        display: block;
        width: fit-content;
        margin: auto;
        margin-top: 2rem;
        border-radius: 0.25rem;
    }

    a:hover {
        color: #add1ec;
    }

</style>