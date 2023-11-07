<script setup>
import Title from './components/Title.vue';
import Button from './components/Button.vue';
import { ref, reactive, computed, watch } from 'vue';
import { calcularTotal } from './utils/index';
const cantidad = ref(5000);
const plazo = ref(6);
const total = ref(0);
const valor = reactive({ valor: 1 });

const MAX = 20000;
const VALUE = 5000;
const MIN = 2000;
const STEP = 100;

function handleClick(e) {
  cantidad.value = e.target.value;
}
watch([cantidad, plazo], () => {
  total.value = calcularTotal(cantidad.value, plazo.value);
});
const formatearMoneda = (valor) => {
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return format.format(valor);
};
const totalMensual = computed(() => {
  return total.value / plazo.value;
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
      <Button :texto="'-'" @fun="handleDecrement" />
      <!-- <Button :texto="'+'" :fun="handleIncrement" /> -->
      <!-- Evento personalizado & emit -->
      <Button :texto="'+'" @fun="handleIncrement" />
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
    <h2 class="text-center text-3xl font-bold">
      {{ formatearMoneda(cantidad) }}
    </h2>

    <h2 class="font-bold text-2xl text-center my-5">Seleccionar Plazo</h2>
    <select
      class="w-full text-center rounded-md bg-gray-100 p-2"
      :value="plazo"
      v-model.number="plazo"
    >
      <option value="6">6 Meses</option>
      <option value="12">12 Meses</option>
      <option value="24">24 Meses</option>
    </select>
    <div v-if="total > 0" class="p-5 my-5 space-y-5 bg-gray-50 rounded-md">
      <h2 class="text-2xl font-semibold text-center">Resumen</h2>
      <p class="text-xl text-center text-gray-500">{{ plazo }} Meses</p>
      <p class="text-xl text-center text-gray-500">
        Total a pagar: {{ formatearMoneda(total) }}
      </p>
      <p class="text-xl text-center text-gray-500">
        Pago mensual de: {{ formatearMoneda(totalMensual) }}
      </p>
    </div>
    <div v-else class="py-4 text-center font-semibold">
      <p>Modifica el valor para calcular</p>
    </div>
  </div>
</template>
