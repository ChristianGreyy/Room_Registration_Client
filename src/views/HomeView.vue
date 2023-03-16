<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <div>count</div>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
