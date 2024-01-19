<template>
  <div class="home display-2">
    <p> I am Inganathi Stemela</p>
    <h1 class="container display-1" id="body"></h1>
  </div>
</template>
<script>
export default {
  mounted() {
    const textElement = document.getElementById('body');
    const originalText = "An aspiring web developer";
    let currentIndex = 0;

    function typeText() {
      if (currentIndex < originalText.length) {
        textElement.textContent += originalText.charAt(currentIndex);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }

    const typingInterval = setInterval(typeText, 100);
  },
};
</script>

<style scoped>
body {
  width: 100vw;
  height: 100vh;
  background-image: url('https://i.postimg.cc/PxfjZCs3/bgrd-img3.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  font-size: 2em; /* Adjust the font size as needed */
  font-weight: bold; /* Add this line to make the text bold */
}
</style>


 
