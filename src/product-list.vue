<template>
  <div>
      <h1>Product-List</h1>
      <div class="productlist">
        <div v-for="product in Products" class="flex">
          <div>
            <img :src="product.img">
          </div>
          <div class="wrap"> 
            <router-link :to="`/product/${product.id}`">
            {{product.name}}
            </router-link>
            <p>Laborum voluptate fugiat irure nisi magna.Laborum voluptate fugiat </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import Products from './products'

  export default {
    computed:{
      Products(){
        return Products
      }
    }
  }
</script>

<style scoped>
  a {
    color: #42b983;
    text-decoration:none;
  }
  .productlist img {
    width:300px;
  }
  .flex {
    display:flex;
    justify-content:start;
    padding-bottom:30px;
    flex-wrap: wrap;
  }
  .wrap {
    margin-left:10px;
  }
  p{
    width:50%;
  }

  @media (max-width:800px){
    p {
        width:100%;
    }
    .flex>div {
      width:100%;
    }
  }
</style>