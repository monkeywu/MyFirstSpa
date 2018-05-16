<template>
  <div class="app">
    <Menu/>
    <div class="img">
      <img src="src/assets/bg1.jpg">
    </div>
    <div class="content">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Menu from './Menu';
import Footer from './Footer';

export default{
  components: {
    Menu,
    Footer,
  }
}
</script>

<style>
    *{
        box-sizing:border-box;
    }
    img {
        width:100%;
    }
    .img img {
      width:70%;
      display:block;
      margin:0 auto;
    }
    body,html {
        margin:0;
        padding:0;
        color: #444;
    }
    .content {
        padding:0 80px ;
    }

</style>
