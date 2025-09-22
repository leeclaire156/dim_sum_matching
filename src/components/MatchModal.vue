<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h2>Match Found!</h2>
      <p>Enter the pronunciation for: <strong>{{ card?.name }}</strong></p>
      <input v-model="userInput" placeholder="Type pronunciation..." />
      <div class="actions">
        <button @click="submit">Submit</button>
        <button @click="closeModal">I don't know</button>
      </div>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
import type { CardWithState } from '@/types/types';

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

function submit() {
  // Compares user input with correct pronunciation (case insensitive, ignore spaces)
  if (userInput.value.replace(/\s/g, "").toLowerCase() === props.card?.pronunciation.replace(/\s/g, "").toLowerCase()) {
    emit('match-correct');
    closeModal();
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
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .error {
    color: red;
    margin-top: 0.5rem;
  }
</style>
