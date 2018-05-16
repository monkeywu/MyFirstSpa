<template>
  <div class="app">
    <Menu/>
    <img src="src/assets/bg1.jpg" style="width:70%;margin:0 auto;display:block;">
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
    body,html {
        margin:0;
        padding:0;
        color: #444;
    }
    .content {
        padding:0 80px ;
    }

</style>
