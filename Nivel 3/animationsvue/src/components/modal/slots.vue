<template>
    <div >
        
        <modalBootstrap :showChild="showModal">
            <template v-slot:header >
                <h5 class="modal-title" id="exampleModalLabel">Hola Mundo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </template>

            <template v-slot:body>
                <div class="form-group">
                    <label for="currencyExchange" class="h3 d-flex justify-content-center">Cambio de moneda</label>
                    <input type="number" class="form-control" id="currencyExchange" aria-describedby="emailHelp" placeholder="Introduzca un número" v-model="money">
                    <p class="form-text text-center mt-2">El cambio de {{money}}€ en dólares son {{money | exchange}}$</p>
                </div>
            </template>

            <template v-slot:footer>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal()">Cerrar</button>
                <button type="button" id="show-modal" class="btn btn-primary" @click="closeModal()" data-dismiss="modal">Aceptar</button>
            </template>
        </modalBootstrap>
    
    
    <div> 
    <pop>
        <div class="modal" :class="{'d-flex': displayModal}" id="resultModal" data-backdrop="static"  v-if="secondModal">
            <div class="modal-dialog modal-dialog-centered" >
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" aria-label="Close"><span
                        aria-hidden="true" @click="closeSecondModal()" >&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <p>Se ha cerrado el modal correctamente</p>
                    </div>
                </div>
            </div>
        </div>
    </pop>
    </div>

    </div>
</template>

<script>

import modalBootstrap from './modalBootstrap'
import pop from '../animations/animationModal'


export default {
    data(){
        return{
            money: "",
            showModal: true,
            secondModal: false,
            displayModal: false,
        }
    },
    components: {
        modalBootstrap, 
        pop
    },
    

    methods:{
        
        closeModal(){
            this.secondModal = true;
            this.showModal= false;
            this.displayModal = true;
        },
        closeSecondModal(){
            this.displayModal = false;
        }
    },

    filters:{
        exchange: function(number){
            return number * 1.23
        }
    }, 
}
</script>


<style>

</style>
