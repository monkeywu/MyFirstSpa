<template>
  <div class="menu">
    <router-link to='/about'>About</router-link>
    <router-link to='/contact'>Contact</router-link>
    <router-link to='/product'>Product</router-link>
  </div>
</template>


<style scoped>
  .menu {
    background-color:white;
    text-align:right;
  }
  a {
    display:inline-block;
    color: #42b983;
    font-size:20px;
    text-decoration:none;
    padding:10px;
  }
  a:hover{
  background-color: #42b98320;
  }
  a.router-link-active{
    text-decoration: underline;
  }
</style>