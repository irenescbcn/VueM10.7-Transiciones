import Vue from 'vue'
import Vuex from 'vuex'
import movies from './../assets/movies'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        movies: movies,
        filter:{
            query:"",
            available: true
        }
    },
    mutations:{
        SET_QUERY (state, query){
            state.filter.query = query;
        },
        SET_AVAILABLE (state){
            state.filter.available = ! state.filter.available;
        }
    },
    getters:{
        filteredMovies (state){
            let movies = state.movies();
            let moviesFiltered = [];
           
            if (state.filter.query.length > 2){
                for (let movie of movies){
                    
                    if(movie.title.toLowerCase().includes(state.filter.query.toLowerCase()) && movie.available === state.filter.available){
                        moviesFiltered.push(movie);
                        movies = moviesFiltered
                    }
                }
                
                if (movies !== moviesFiltered){
                    movies = 1
                }
            }
            return movies;
        }
    }
    
})
