<template>
  <div class="grid-container">
    <div
      v-for="card, index in cards"
      :key="card.name + index"
      class="card"
      :class="{ flipped: card.flipped }"
      @click="flipCard(card)"
    >
      <div class="front">
        <template v-if="card.showImage">
          <img class="front-image" :src="card.image" />
        </template>
        <template v-else>
          <div class="front-name">{{ card.name }}</div>
        </template>
      </div>
      <div class="back"></div>
    </div>
  </div>
  <MatchModal
    :card="matchedCard"
    :show="showMatchModal"
    @close="onModalIncorrect"
    @match-correct="onModalCorrect"
  />
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import type { CardWithState } from '@/types/types.ts';
  import data from '../data/cards.json';
  import MatchModal from '@/components/MatchModal.vue';
  import { useGameState } from '@/composable/useGameState.ts';
  const { resetScore, increaseScore } = useGameState(); 

  const cards = ref<CardWithState[]>([]);
  const firstCard = ref<CardWithState | null>(null);
  const secondCard = ref<CardWithState | null>(null);
  const lockBoard = ref(false);
  const showMatchModal = ref(false);
  const matchedCard = ref<CardWithState | null>(null);

  function loadData() {
    const relativePath = '../assets/cards/';
    const showImageData = data.map((card) => ({
      ...card,
      showImage: true,
      flipped: false,
      image: new URL(`${relativePath + card.image}`, import.meta.url).href
    }));

    const showNameData = data.map((card) => ({
      ...card,
      showImage: false,
      flipped: false,
      image: new URL(`${relativePath + card.image}`, import.meta.url).href
    }));

    cards.value = [...showImageData, ...showNameData];
    shuffleCards(cards.value);
  }

  function shuffleCards(array: CardWithState[]) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex] as CardWithState, array[currentIndex] as CardWithState];
    }
  }

  function flipCard(card: CardWithState) {
    if (lockBoard.value || card === firstCard.value) return;

    card.flipped = true;

    if (!firstCard.value) {
      firstCard.value = card;
      return;
    }

    secondCard.value = card;
    lockBoard.value = true;

    const isMatch = checkForMatch(firstCard.value, secondCard.value);
    if (isMatch) {
      increaseScore();
      matchedCard.value = card;
      showMatchModal.value = true;
    } else {
      unflipCards();
    }
  }

  // To be updated in the future with more complex matching logic based on settings
  function checkForMatch(firstCard: CardWithState, secondCard: CardWithState) {
    const isMatch = firstCard.name === secondCard.name;
    return isMatch;
  };

  function disableCards() {
    firstCard.value = null;
    secondCard.value = null;
    lockBoard.value = false;
  }

  function unflipCards() {
    setTimeout(() => {
      if (firstCard.value) firstCard.value.flipped = false;
      if (secondCard.value) secondCard.value.flipped = false;
      resetBoardValues();
    }, 1000);
  }

  // User typed the correct pronunciation
  function onModalCorrect() {
    increaseScore();
    showMatchModal.value = false;
    disableCards();
  }

  function onModalIncorrect() {
    showMatchModal.value = false;
    disableCards();
  }


  function unflipAllCards() {
    // Set flipped = false for all currently flipped cards
    cards.value.forEach(card => {
      if (card.flipped) {
        card.flipped = false; // triggers the CSS animation
      }
    });
  }

  function resetBoardValues() {
    [firstCard.value, secondCard.value]  = [null, null];
    lockBoard.value = false;
  }

  function restart() {
    lockBoard.value = true; 
    unflipAllCards();
    setTimeout(() => {
      resetBoardValues();
      loadData();
      resetScore();
    }, 500); // wait for the unflip animation to finish
  }

  onMounted(() => {
    loadData();
  });

  defineExpose({ restart });
</script>

<style lang="scss" scoped>
  .grid-container {
    display: grid;
    gap: 0.5rem;

    // responsive columns: auto-fit as many cards as fit
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-auto-rows: minmax(120px, 1fr);

    width: 100%;
    max-width: 1000px; // optional: prevent super-wide grid on big screens
    height: 100%;      // fill the main container
  }

  .card {
    width: 100%;
    aspect-ratio: 2 / 3; // keeps 2:3 ratio for each card
    border-radius: 10px;
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
    // height: calc(140px / 2 * 3);
    position: relative;
    text-align: center;

  &.flipped {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    border-radius: 10px;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .front {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateY(180deg);
  }

  .front-image {
    height: 100%;
  }

  .front-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    background-color: white;
   }

  .back {
    background-image: url('../assets/hagao_pattern_not_colored.png');
    background-position: center center;
    background-size: cover;
  }
}
</style>