<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
let id = ref(route.params.id);

let data = ref('');
let edit = ref(false);

const fetchData = async () => {
    if (id.value) {
        data.value = await fetch(`http://localhost:3000/movies/${id.value}`)
            .then(response => response.json())
            .then(data => {
                return data
        })
    }
};

const switchTag = (event, tag) => {
    if(!edit.value) return;

    const element = event.target;
    const oldTag = element.tagName;
    
    let newElement = document.createElement(tag);
    newElement.style.width = '100%';
    newElement.value = element.textContent;
    newElement.dataset.tag = oldTag;
    element.replaceWith(newElement);
};

const cancelEditMode = () => {
    if(!edit.value) {
        let inputs = document.querySelectorAll("input, textarea");
        inputs.forEach(input => {
            if (input.dataset.tag){
                let element = document.createElement(input.dataset.tag);
                element.innerHTML = input.value;
                input.replaceWith(element);
                console.log(input.dataset.tag)
            }
        })
    }
}

onMounted(fetchData);

watch(() => route.params.id, (newId) => {
    id.value = newId;
    fetchData();
});
</script>

<template>
    <div class="editMode">
        <span>Edit mode</span>
        <input type="checkbox" v-model="edit" @change="cancelEditMode()">
    </div>
    <div class="container">
        <img v-if="data.poster" :src="data.poster">
        <img v-else class="lorem" src="https://picsum.photos/300">
        <div>
            <h1 id="title" @click="switchTag($event, 'input')">{{ data.title }}</h1>
            <p id="fullplot" @click="switchTag($event, 'textarea')">{{ data.fullplot }}</p>
            <span>Genre(s) :</span>
            <ul>
                <li v-for="element in data.genres">{{ element }}</li>
            </ul>
            <p>Released : <span id="released" @click="switchTag($event, 'input')">{{ data.released }}</span></p>
        </div>
    </div>
</template>

<style scoped>  
    h1 {
        width: 100%;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 2rem;
        width: 100%;
    }

    .container div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        justify-content: flex-start;
    }

    ul {
        margin-top: 0.25rem;
    }

    @media (min-width: 768px) {
        .container {
            flex-direction: row;
        }

        img {
            max-width: 50%;
        }
    }

    @media (min-width: 980px) {
        img {
            max-width: 30%;
        }
    }
</style>