<template>
  <nav id="nav" class="navbar navbar-expand-lg bg-body-tertiary">
 <div class="container-fluid">
   <router-link to="/">
       <img class="img-fluid" src="https://i.postimg.cc/xCy7kKmr/s.png" width="50px" height="100px" alt="logo">
   </router-link>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <li class="nav-item">
         <router-link to="/" class="nav-link active">
           Home
         </router-link>
       </li>
       <li class="nav-link active">
         <router-link to="/about">
           About
         </router-link>
       </li>
       <li class="nav-link active">
         <router-link to="/resume">
           Resume
         </router-link>
       </li>
       <li class="nav-link active">
         <router-link to="/projects">
           Projects
         </router-link>
       </li>
       <li class="nav-link active">
         <router-link to="/testimonials">
           Testimonials
         </router-link>
       </li>
       <li class="nav-link active">
         <router-link to="/contact">
           Contact
         </router-link>
       </li>
       </ul>
   </div>
 </div>
</nav>
</template>
<style>
#nav{
  margin-top: 10em;
  position: sticky;
  top:0px
}
</style>