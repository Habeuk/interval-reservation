import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useReservationStore = defineStore('reservation', () => {
  const day = new Date()
  day.setHours(7, 0, 0)
  const beginDate: Period = { end: day }
  const disabledDays: Array<weekDays | Period | Date> = [beginDate]

  //Datas
  const debut = ref(day)
  day.setMonth(day.getMonth() + 1)
  const fin = ref(day)
  const iconImage = ref('')
  const labels = ref({
    debut: 'Du',
    fin: 'Au',
    title: 'Je reserve mon parking',
    callToAction: 'Je Réserve'
  })
  const links = ref({
    submitLink: '/favicon.ico'
  })
  const disabledDate = ref(disabledDays)

  //Actions
  const submitForm = (datas: { debut: Date | String; fin: Date | String }) => {
    //should send data to backend
    console.log(datas)
  }
  return { debut, fin, iconImage, links, labels, disabledDate, submitForm }
})

interface weekDays {
  repeat: string
  weekdays: Array<Number>
}
interface Period {
  end?: Date | String
  start?: Date | String
}
