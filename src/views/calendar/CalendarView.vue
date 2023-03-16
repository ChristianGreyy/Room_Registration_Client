<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        initialView: "timeGridWeek",
        businessHours: {
          daysOfWeek: [0, 1, 2, 3, 4, 5, 6], // Monday - Thursday
          startTime: "7:00", // a start time (10am in this example)
          endTime: "21:30", // an end time (6pm in this example)
        },
        dateClick: this.handleDateClick,
        events: [{ title: "Phụ nữ Việt Nam", date: "2023-03-16" }],
      },
    };
  },
  methods: {
    handleDateClick: function (arg) {
      alert("date click! " + arg.dateStr);
    },
  },
};
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>

<style scoped>
FullCalendar {
  width: 100%;
}
</style>
