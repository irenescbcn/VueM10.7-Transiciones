<template>
    <div>
        <div class="form-group" >
            <label for="propPassword2">Repita la contraseña</label>
            <span>*</span>
            <input @keyup="show = true" type="password" :class="{'none': passwordClass, 'is-invalid': passwordClass, 'is-valid': passwordClass == false}" v-bind="$attrs" id="propPassword2" class="form-control"  :value="value" @blur="validatePassword2" @input="$emit('update', $event.target.value)">
            <fade>
                <small v-if="show" id="propPassword2" class="form-text text-danger">{{message}}</small>
            </fade>
        </div>
    </div>
</template>

<script>
import fade from '../animations/fadeForm.vue'
export default {
    components:{
        'fade': fade
    },
    
    props: {
        propPassword: {type: String},
        value: {type: String},
        pass2MessageChild:  {type: Boolean},  
    },

    model:{
        prop: "value",
        event: "update",
    },

    
    mounted(){
        this.message=""
    },
    

    data(){
        return{
            message: "", 
            errorPassword2: false,
            passwordClass: undefined,
            show: false,

        }
    },

    watch:{
        validatePassword2() {
            if(!this.value && this.pass2MessageChild){
                this.message = "Repita la contraseña";
                this.errorPassword2 = true;
                this.$emit("errorInputPassword2", this.errorPassword2);
                this.passwordClass = undefined;
                this.show = false;
                
            }else if(!this.pass2MessageChild){
                this.message = "";
                this.passwordClass = undefined;
                    
            }else if(this.propPassword == this.value){
                this.message = "";
                this.errorPassword2 = false;
                this.$emit("errorInputPassword2", this.errorPassword2);
                this.passwordClass = false;
                  
            }else{
                this.message = "Las contraseñas deben coincidir";
                this.errorPassword2 = true;
                this.$emit("errorInputPassword2", this.errorPassword2);
                this.passwordClass = true;
                this.show = false;
            }
        }
    },


    computed: {
        validatePassword2(){  
            if(!this.value && this.pass2MessageChild){
                return true
            }else if(!this.pass2MessageChild){
                return false
            }else if(this.propPassword == this.value){
                return false  
            }else{
                return true 
            }      
        },
    }
}

</script>