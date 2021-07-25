<template>
    <div>
        <button @click="show = true" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Haz clic aquí
        </button>

        <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <pop>
                <div class="modal-dialog" v-if="show">
                    <div class="modal-content">
                        <div class="modal-header" >
                            <slot name="header"></slot>
                        </div>
                        <div class="modal-body">
                            <slot name="body"></slot>
                        </div>
                        <div class="modal-footer">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </div>
            </pop>
        </div>
    </div>  
</template>

<script>
import pop from '../animations/animationModal'

export default {
    components: {
        pop
    },
    props:['showChild'],
    
    data(){
        return{
            show: false
        }
    }, 
}
</script>
<style>

</style>