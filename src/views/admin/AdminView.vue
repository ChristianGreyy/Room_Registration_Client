<script setup>
import SideBarView from "../../components/SideBarView.vue";
// import { Header, Item } from "vue3-easy-data-table";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import interfaces from "../../configs/entity.interface";
const router = useRouter();
const route = useRoute();

let headers = ref([]);
let title = ref("");
let data = ref([]);

watch(
  () => route.params.option,
  async (option) => {
    if (option == "users") {
      title.value = "Quản lý người dùng";
    } else if (option == "subjects") {
      title.value = "Quản lý môn học";
    } else if (option == "lessons") {
      title.value = "Quản lý tiết học";
    }
    let { texts, values } = interfaces(option);

    const response = await fetch("http://localhost:8080/" + option);
    const result = await response.json();
    if (response.status == 200) {
      data.value = result.data;
      headers = texts.map((text, index) => {
        return { text: text, value: values[index], sortable: true };
      });
      console.log("data", data);
    }
    console.log("headers", headers);
  },
  { immediate: true }
);
</script>

<template>
  <!-- This is a reverse engineering of the "Hyperspace"
     design from HTML5 Up! https://html5up.net/hyperspace -->

  <main class="main">
    <SideBarView />
    <div class="twitter">
      <EasyDataTable :headers="headers" :items="data" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

html {
  font-family: Arial;
  font-size: 16px;
  background: #5e42a6;
}

.sidebar {
  position: fixed;
  width: 25%;
  height: 100vh;
  background: #312450;
  font-size: 0.65em;
}

.nav {
  position: relative;
  margin: 0 15%;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
}

.nav ul {
  list-style: none;

  li {
    position: relative;
    margin: 3.2em 0;

    a {
      line-height: 5em;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.4em;
      color: rgba(#fff, 0.35);
      display: block;
      transition: all ease-out 300ms;
    }

    &.active a {
      color: white;
    }

    &:not(.active)::after {
      opacity: 0.2;
    }

    &:not(.active):hover a {
      color: rgba(#fff, 0.75);
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.2em;
      background: black;
      left: 0;
      bottom: 0;
      background-image: linear-gradient(to right, #5e42a6, #b74e91);
    }
  }
}

.twitter {
  position: relative;
  width: 75%;
  float: right;
  height: 100vh;
  padding: 30px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  a {
    position: relative;

    img {
      width: 48px;
      height: 48px;
    }
  }

  p {
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing: 0.1em;
    color: #fff;
    font-weight: bold;
    margin-top: 20px;
  }
}
</style>
