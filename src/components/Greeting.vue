<script setup>
import { ref } from "vue";
// 接收参数
const props = defineProps({
  messages: { type: Array, required: true },
});

const greeting = ref("");
const randomMessage = () =>
  props.messages[Math.floor(Math.random() * props.messages.length)];
const setGreeting = () => {
  console.log(111);
  greeting.value = randomMessage();
};
</script>

<template>
  <h3 v-if="greeting">{{ greeting }} ! 欢迎</h3>
  <button @click="setGreeting">新的欢迎语</button>
</template>

<style>
.counter {
  display: grid;
  font-size: 2em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2em;
  place-items: center;
}

.counter-message {
  text-align: center;
}
</style>
