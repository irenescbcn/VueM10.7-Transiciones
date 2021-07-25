<template>
  <div id="app">
    <div class="container">
      <button class="btn" @click="switchComponent('moviesApp')">Movies</button>
      <button class="btn" @click="switchComponent('slots')">Slots</button>
      <button class="btn">Form</button>
      
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
      
    </div>
  </div>
</template>

<script>
import moviesApp from './components/movies/moviesApp';
import slots from './components/modal/slots';

export default {
  name: 'App',
  data(){
    return {
      currentComponent: "moviesApp"
    }
  },
  components: {
    moviesApp,
    slots,
    
  }, 
  methods:{
    switchComponent(value){
      this.currentComponent = value
    }
  },
   
}
</script>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
}
button{
  background-color: #787A91;
  margin: 10px;
  color: white
}
</style>
