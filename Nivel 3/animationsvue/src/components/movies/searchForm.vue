<template>
    <div>
        <div>
            <div class="form-group mb-2">
                <input type="text" v-model="search" class="form-control" >
            </div>

            <div class="form-check form-check-inline">
                <input class="form-radio-input" v-model="available" :value="true" type="radio">Disponible
            </div>

            <div class="form-check form-check-inline">
                <input class="form-radio-input" v-model="available" :value="false" type="radio">No Disponible
            </div>
        </div>
    </div>
</template>

<script>
import store from '../../store/index'
export default {
    computed:{
        search:{
            get (){
                return store.state.filter.query;
            },
            set (val){
                store.commit('SET_QUERY', val)
            }
        }, 
        available:{
            get () {
                return store.state.filter.available
            },
            set () {
                store.commit('SET_AVAILABLE');
            }

        }
    }
}
</script>