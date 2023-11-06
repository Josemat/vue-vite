<script setup>
const props = defineProps({
  texto: String,
  fun: Function,
});
</script>
<template>
  <div>
    <button
      class="h-10 w-10 flex items-center justify-center font-bold bg-blue-500 rounded-md hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 text-white text-2xl"
      @click="fun"
    >
      {{ texto }}
    </button>
  </div>
</template>
