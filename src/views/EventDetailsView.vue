<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService.js'

const event = ref(null)

const props = defineProps({
  id: { require: true }
})

onMounted(() => {
  EventService.getDetailEvent(props.id)
    .then((result) => {
      event.value = result.data
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
