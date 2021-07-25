<template>
    <div>
        <h1>Buscador con Vuex</h1>
        <searchForm></searchForm>
        <moviesList></moviesList>
        
    </div>
</template>

<script>
import searchForm from './searchForm';
import moviesList from './moviesList';


export default {
    components:{
        searchForm,
        moviesList
    }
}
</script>