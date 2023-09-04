<script setup lang="ts">
import DateTimeInput from './components/DateTimeInput.vue';
import { useReservationStore } from './stores/reservation';
import pButton from 'primevue/button';
import { parkingIcon } from './app-configs';
const store = useReservationStore();


//Actions
const setBeginDate = (date: Date) => {
  store.debut = date;
  store.fin = new Date(date.toString());
  store.fin.setHours(date.getHours() + 1);
  store.endAvailable = true
}
const setReservation = () => {
  if (store.endAvailable && store.fin > store.debut) {
    store.submitForm();
  }
}
</script>


<template>
  <div class="bg-gray-lg py-5 main-app-container">
    <header class="main-title h2 text-center font-weight-bold mb-3 mt-md-5">{{ store.labels.title }}</header>
    <div class="book-parking container bg-light py-5">
      <h3 class="book-parking-title h6 text-center">{{ store.labels.description }}</h3>
      <div class="book-parking-block row">
        <div class="parking-icon col-md-2 text-right text-primary" v-html="parkingIcon">
        </div>
        <div class="col-md-8 book-form">
          <DateTimeInput :date-time="store.debut" :label="store.labels.debut" @up-date="setBeginDate" />
          <div class="field-separator text-center mx-5">
            <svg width="800" height="800" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414L14.586 9H3a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"
                fill="#5C5F62" />
            </svg>
          </div>
          <DateTimeInput :date-time="store.fin" :label="store.labels.fin" :min-date-time="store.debut"
            :available-field="store.endAvailable" />
        </div>
        <div class="call-to-action col-md-2 text-left d-flex flex-column justify-content-end">
          <pButton :label="store.labels.callToAction" severity="primary" class="mb-3 py-3"
            :class="{ 'btn-outline-light': store.endAvailable }" @click="setReservation"
            :disabled="!store.endAvailable" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.call-to-action {
  button {
    font-size: 1.4rem;
    max-width: 150px;
  }
}
</style>
