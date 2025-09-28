<template>
  <v-app class="my-background">
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>

<style lang="scss" scoped>
.my-background {
  position: relative;
  overflow: hidden;
  padding: 50px;
  z-index: 1;
}

.my-background::before {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  width: 500%;
  height: 500%;

  /* Your big pattern */
  background-image: url("./assets/hagao_pattern_colored.png");
  background-repeat: repeat;
  background-size: 350px;
  
  /* Diagonal motion using translate */
  animation: moveDiagonal 20s linear infinite;
  transform: rotate(45deg);
  transform-origin: center;

  z-index: 0;
}

@keyframes moveDiagonal {
  from {
    transform: rotate(45deg) translate(0%, 0%);
  }
  to {
    transform: rotate(45deg) translate(10%, -10%);
  }
}
</style>
