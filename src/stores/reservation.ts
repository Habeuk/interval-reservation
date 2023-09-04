import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useReservationStore = defineStore('reservation', () => {
  const dayStart = new Date()
  
  dayStart.setHours(dayStart.getHours()+1, 0, 0)
  const beginDate: Period = { end: dayStart }
  const disabledDays: Array<weekDays | Period | Date> = [beginDate]

  const dayEnd = new Date(dayStart.toString())
  dayEnd.setDate(dayStart.getDate()+1)
  dayEnd.setHours(7, 0, 0)

  //Datas
  const debut = ref(dayStart)
  const fin = ref(dayEnd)
  const iconImage = ref('')
  const labels = ref({
    debut: 'Du',
    fin: 'Au',
    title: 'Je reserve mon parking',
    description: "Sélectionnez le jour et l'heure",
    callToAction: 'Je Réserve'
  })
  const links = ref({
    submitLink: '/favicon.ico'
  })
  const disabledDate = ref(disabledDays)
  const endAvailable= ref(false)
  
  //Getters
  const getBeginMinDate = computed(()=>{
    const date = new Date();
    date.setHours(7, 0, 0);
    return date;
  })

  const getEndMinDate = computed(()=>{
    const date = debut.value;
    date.setHours(date.getHours() + 1)
    return date;
  })
  
  //Actions
  const submitForm = () => {
    console.log({
      debut:debut.value, fin:fin.value
    })
  }
  
  return { 
    debut,
    fin,
    iconImage,
    links,
    labels,
    disabledDate,
    getBeginMinDate,
    getEndMinDate,
    endAvailable,
    submitForm
  }
})

interface weekDays {
  repeat: string
  weekdays: Array<Number>
}
interface Period {
  end?: Date | String
  start?: Date | String
}
