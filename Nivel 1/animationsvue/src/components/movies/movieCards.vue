<template>

    <div class="col-md-6 mt-3">
      <div class="card">
        <div class="card-header">
          <h4>{{movie.title}}</h4>
          <h5>Disponibilidad: {{movie.available}}</h5>
        </div>

        <div class="card-body">
          <p class="card-text">{{movie.description}}</p>
        </div>
      </div>
    </div>

</template>

<script>

export default {
    props:{
        movie:{
            type: Object,
            required: true
        }
    }
}
</script>