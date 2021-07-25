<template>
    <div >
        <switchTransition>
            <div class="col " v-if="movies.length > 0" key="films">
                <fadeGroup class="row">
                    <movieCards :movie="movie" v-for="movie in movies" :key="movie.id" ></movieCards>
                </fadeGroup>
            </div> 
            <div v-else-if="1" class="alert alert-danger mt-2" key="noFilms">No hay películas disponibles</div>
        </switchTransition>
    </div>
</template>

<script>
import movieCards from './movieCards'
import Vuex from 'vuex'
import fadeGroup from '../animations/fadeGroup'
import switchTransition from '../animations/switchTransition'

export default {
    data(){
        return{
            show: true,
        }
    },
    components: {
        movieCards,
        fadeGroup,
        switchTransition
    },
    computed: {
        ...Vuex.mapGetters({
            movies: 'filteredMovies'
        }) 
    }
}
</script>
