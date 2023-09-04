<script lang="ts">
import { ref } from 'vue';
import Calendar from 'primevue/calendar';

export default {
    name: "DateTimeInfo",
    props: {
        dateTime: {
            type: Date,
            required: true,
        },
        label: {
            type: String,
            default: ""
        }
    },
    emits: ["upDate", "upTime"],
    setup(props, { emit }) {
        const myDateTime = ref({
            date: props.dateTime,
            hour: props.dateTime.getHours(),
        })
        const selectedHour = ref(myDateTime.value.date)
        const selectedDate = ref(myDateTime.value.date)
        const upDate = (date: Date) => {
            emit("upDate", date)
        }
        const upTime = (time: Date) => {
            emit("upTime", time)
        }
        return {
            ...props,
            selectedDate,
            selectedHour,
            myDateTime,
            upDate,
            upTime
        }
    },
    components: { Calendar }
}
</script>
<template>
    <div class="date-time-input">
        <header class="mb-2">
            {{ label }}
        </header>
        <main class="row mx-0">
            <span class="p-input-icon-left col-md-6 px-0 ">
                <svg width="800" height="800" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.5 1a.5.5 0 0 1 .5.5V2h5v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 .5-.5ZM10 3v.5a.5.5 0 0 0 1 0V3h1.5a.5.5 0 0 1 .5.5V5H2V3.5a.5.5 0 0 1 .5-.5H4v.5a.5.5 0 0 0 1 0V3h5ZM2 6v6.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6H2Zm5 1.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM9.5 7a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm.5 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM9 9.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM7.5 9a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM5 9.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM3.5 9a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM3 11.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"
                        fill="#000" />
                </svg>
                <Calendar class="date-time-picker w-100" v-on:update:model-value="upDate" selectionMode="single"
                    :numberOfMonths="2" v-model="selectedDate" :min-date="myDateTime.date" :manual-input="false" />
            </span>
            <span class="p-input-icon-left col-md-6 px-0">
                <svg width="800" height="800" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1-10h4v2h-6V6h2v5Z" />
                </svg>
                <Calendar class=" date-time-picker w-100" v-on:update:model-value="upTime" v-model="selectedHour" timeOnly
                    :manual-input="false" />
            </span>
        </main>
    </div>
</template>
<style lang="scss" scoped>
.date-time-input {

    .date-time-picker {

        // background: red;
        :deep(input) {
            border: none;
            border-bottom: 1px solid black;
            font-weight: bold;
            border-radius: 0;
            padding-left: calc(35px + 0.75rem);
            font-size: 1.6rem;
        }
    }

    svg {
        height: 100%;
        max-height: 30px;
        width: auto;
        transform: scale(1, 1);
        top: 0;
        margin-top: 0;
    }
}
</style>