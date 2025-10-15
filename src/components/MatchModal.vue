<template>
  <v-card v-if="show" class="modal-overlay">
    <div class="modal-content">
      <v-card-text class="modalText pb-0">
        <h2>Match Found!</h2>
        <div>Enter the pronunciation for: <strong>{{ card?.name }}</strong></div>
        <v-text-field variant="outlined" v-model="userInput" placeholder="Type pronunciation..." clearable />
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </v-card-text>
  
      <v-card-actions class="actions ma-0">
        <v-btn @click="submit">Submit</v-btn>
        <v-btn @click="closeModal">I don't know</v-btn>
        <v-btn
          color="teal-accent-4"
          text="Learn More"
          variant="text"
          @click="reveal = true"
        ></v-btn>
      </v-card-actions>
    </div>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="position-absolute w-100"
        height="100%"
        style="bottom: 0;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4">Origin</p>

          <p class="text-medium-emphasis">
            late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
          </p>
        </v-card-text>

        <v-card-actions class="pt-0">
          <v-btn
            color="teal-accent-4"
            text="Close"
            variant="text"
            @click="reveal = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
import type { CardWithState } from '@/types/types';
// future: if success with match, make 2nd modal message as chinese text version of "yat go ____!" with btns >Continue? >Learn eytomology
// future: if I dont know, make 2nd modal message as "Yat go ____!" with btns >Continue? >Learn eytomology
const props = defineProps<{
  card: CardWithState | null;
  show: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'match-correct'): void;
}>();

const userInput = ref('');
const errorMessage = ref('');
const reveal = ref(false);

function submit() {
  // Compares user input with correct pronunciation (case insensitive, ignore spaces)
  if (userInput.value.replace(/\s/g, "").toLowerCase() === props.card?.pronunciation.replace(/\s/g, "").toLowerCase()) {
    emit('match-correct');
    // closeModal();
  } else {
    errorMessage.value = 'Incorrect! Try again.';
    setTimeout(() => {
      errorMessage.value = '';
    }, 2000);
  }
}

function closeModal() {
  userInput.value = '';
  errorMessage.value = '';
  emit('close');
}
</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background: rgba(0,0,0,0.6);
    z-index: 999;
  }

  .modal-content {
    background: rgb(255, 255, 255);
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    max-width: 80%;
  }

  .modalText > * {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
  }

  .actions {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    color: black;
  }
  .error {
    color: red;
    margin-top: 0.5rem;
  }
</style>
