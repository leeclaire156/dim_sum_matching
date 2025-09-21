import { ref } from 'vue';

const score = ref(0);


export function useGameState() {
  function increaseScore() {
    score.value++;
  }

  function resetScore() {
    score.value = 0;
  }

  return {
    score,
    increaseScore,
    resetScore
  };
}