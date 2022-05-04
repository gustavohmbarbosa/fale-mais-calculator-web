<template>
  <div class="plan-card shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4">
    <p class="text-black dark:text-white text-3xl font-bold">
      Plano X
    </p>
    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
      60 minutos por mês
    </p>
    <p class="text-black dark:text-white  text-3xl font-bold">
      R$ 60,00
    </p>
    <p class="text-gray-500 dark:text-gray-300 text-sm mb-4">
      Por mês
    </p>
    <button type="button" class="w-56 m-auto px-3 py-3 text-sm shadow border border-black rounded-lg text-black bg-white hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 ">
      Assinar plano
    </button>
    <p class="mt-4">
      sem o plano: <strong>R$ 260,00</strong>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PlanCard'
})
</script>

<style scoped>
  .plan-card {
    width: 100%;
    text-align: center;
    transition: 0.5s;
  }

  .plan-card:hover {
    transform: scale(1.03);
  }
</style>
