<template>

  <main class="container-fluid">

    <navbar></navbar>
    <router-view/>
    <Footer/>

  </main>
  
</template>

<script>

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import HomeView from './views/HomeView.vue';

export default{
  components:{
    Navbar,
    Footer,
    HomeView
  }
}
</script>

<style src="@/assets/CSS/style.css">

</style>
