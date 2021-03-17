<template>
  

   <div class="container print">
        
          <div class="card alert-danger">
           
            <div class="card-body">
              <h3 class="card-title">Error</h3>
              <h1 class="card-text">{{errorMessage|capitalize}}</h1>
            </div>
          </div>
        
    </div>
</template>

<script>
export default {
  data(){
    return{
      errorMessage:"Page Not Found"
    }
  }
}
</script>

<style scoped>
.print{
  text-align: center;
  color: white;
  padding: 100px
}
</style>