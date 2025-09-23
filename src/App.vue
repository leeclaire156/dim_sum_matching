<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/play">Game</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; Cart-to-Card is a 2024 Vue App Developed by Claire Lee</p>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;              // take all remaining space below header
    padding: 1rem;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 0 10px;
  }

  footer {
    display: flex;
    flex-direction: column;      // stack vertically  
    align-items: center;         // center horizontally
  }
</style>