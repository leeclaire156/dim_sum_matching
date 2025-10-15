<template>
  <main class="grid-container">
    <h1>Memory Game!</h1>
    <GameGrid ref="gameGrid"/>
    <p>Score:
      <span class="score">{{ score }}</span>
    </p>
    <div class="actions">
      <v-btn @click="restart">Restart</v-btn>
      <router-link style="text-decoration: none; color:inherit" to="/">
        <v-btn @click="restart">Main Menu</v-btn>
      </router-link>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useGameState } from '@/composable/useGameState';
import GameGrid from '@/components/GameGrid.vue';

export default defineComponent({
  name: 'Game',
  components: {
    GameGrid, // register child
  },
  setup() {
    const { score, resetScore } = useGameState();
    // get access to child methods
    const gameGrid = ref<InstanceType<typeof GameGrid> | null>(null);


    function restart() {
      gameGrid.value?.restart();
    }

    return {
      score,
      resetScore,
      gameGrid,
      restart,
    };
  },
});
</script>

<style lang="scss" scoped>
  .grid-container {
    display: flex;
    flex-direction: column;      // stack vertically  
    align-items: center;         // center horizontally
    justify-content: flex-start; // start from top
    gap: 1.5rem;                 // spacing between elements
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.514);
    border-radius: 10px;
  }

  .score {
    font-weight: bold;
    font-size: 1.5rem;
  }

  body {
    min-height: 100vh;
    min-width: 100vw;
    background-color: #12181f;
    color: white;
  }

  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 50px;
  }

  p {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }

  .actions {
    display: flex;
    justify-content: center;
  } 
 
  .actions button {
    margin: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-radius: 8px;
    background-color: #27ae60;
    color: white;
    cursor: pointer;
  }
</style>
