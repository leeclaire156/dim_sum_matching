<template>
  <div class="title-page">
    <h1>Welcome to My Vue App!</h1>
    <p>This is the homepage content.</p>
    <!-- Other homepage specific content -->
  </div>
</template>

<script lang="ts">
  export default {
      name: 'Title'
  }
</script>

<style lang="scss" scoped>
.title-page {
  text-align: center;
  padding: 50px;
  background-image: url("../assets/hagao_pattern_colored.png");
  background-size: contain;
}
</style>