<script setup>
import Title from './components/Title.vue';
import Button from './components/Button.vue';
import { ref, reactive, computed } from 'vue';
const cantidad = ref(5000);
const valor = reactive({ valor: 1 });

const MAX = 10000;
const VALUE = 5000;
const MIN = 2000;
const STEP = 100;

function handleClick(e) {
  cantidad.value = e.target.value;
}
const formatearMoneda = computed(() => {
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return format.format(cantidad.value);
});
function handleIncrement(e) {
  if (cantidad.value >= MAX) {
    alert('Valor inválido');
    return;
  }
  cantidad.value = cantidad.value + STEP;
}
function handleDecrement(e) {
  if (cantidad.value <= MIN) {
    alert('Valor inválido');
    return;
  }
  cantidad.value = cantidad.value - STEP;
}
</script>

<template>
  <div class="my-20 max-w-lg mx-auto bg-white shadow-md p-10 rounded-lg">
    <Title />
    <div class="flex justify-between mt-10">
      <Button :texto="'-'" :fun="handleDecrement" />
      <Button :texto="'+'" :fun="handleIncrement" />
    </div>
    <div
      class="my-10 accent-blue-600 hover:accent-blue-600 bg-gray-100 rounded-full"
    >
      <input
        class="width-100 w-full"
        type="range"
        name="rango"
        id="rango"
        :min="MIN"
        :max="MAX"
        :step="STEP"
        v-model.number="cantidad"
      />
    </div>
    <h2 class="text-center text-3xl font-bold">{{ formatearMoneda }}</h2>
  </div>
</template>
