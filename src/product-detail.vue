<template>
  <div>
    <router-link to="/courses">Back</router-link>
    <div>
      <img :src="Product.img">
    </div>
    <h1>{{Product.name}}</h1>
    <p>Nunc eu arcu viverra magna vulputate bibendum vel at nulla. Suspendisse bibendum, magna ac auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem. Pellentesque justo orci, sollicitudin in ultricies at, fringilla eu nulla. Donec enim libero, tristique egestas enim et, tristique vehicula risus. Cras hendrerit, tortor ut pharetra bibendum, nisl nisl placerat magna, et blandit erat nisl at metus. Nam vel porta justo, sed porta urna. Nulla facilisi. Nam accumsan dolor iaculis diam semper convallis. Maecenas pellentesque ultrices ligula, fermentum porta libero fringilla a. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eget augue a purus suscipit ultricies vel sit amet tellus. Nulla suscipit, enim eget mollis ornare, justo tortor bibendum purus, in ullamcorper lectus ante a nunc</p>
  </div>
</template>

<script>
  import Products from './products'
  export default {
    computed:{
      Product(){
        const {id} = this.$route.params;
        return Products.find(product=>product.id == id) || {};
      }
    }
  }
</script>

<style scoped>
  a {
    color: #42b983;
    text-decoration:none;
  }
  img {
    width:70%;
    margin:0 auto;
  }
</style>