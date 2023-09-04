<script setup lang="ts">
import DateTimeInput from './components/DateTimeInput.vue';
import { useReservationStore } from './stores/reservation';
import pButton from 'primevue/button';
const store = useReservationStore();

</script>


<template>
  <div class="book-parking">
    <h3 class="book-parking-title h5 text-center">{{ store.labels.title }}</h3>
    <div class="book-parking-block row">
      <div class="icon col-md-2">
        <link rel="icon" href="<%= BASE_URL %>favicon.ico">
      </div>
      <div class="col-md-8 book-form">
        <DateTimeInput :date-time="store.debut" :label="store.labels.debut" />
        <div class="field-separator text-center mx-5">
          <svg width="800" height="800" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414L14.586 9H3a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"
              fill="#5C5F62" />
          </svg>
        </div>
        <DateTimeInput :date-time="store.fin" :label="store.labels.fin" />
      </div>
      <div class="call-to-action col-md-2 d-flex flex-column justify-content-end">
        <pButton :label="store.labels.callToAction" severity="primary" />
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
