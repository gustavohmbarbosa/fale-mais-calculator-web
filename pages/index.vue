<template>
  <div class="w-full lg:w-2/3 m-auto">
    <PageHeader />
    <SearchArea />
    <button>Calcular</button>

    <div class="plans-content mt-10">
      <h2 class="text-4xl text-center mb-4">
        <strong>Planos</strong>
      </h2>

      <div class="plans grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 lg:mx-0">
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import SearchArea from '@/components/SearchArea.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    PageHeader,
    SearchArea
  }
})
</script>

<style scoped>
  button {
    width: 100%;
    margin-top: 10px;
    padding: 8px;
    background-color: black;
    font-size: 1.5rem;
    color: white;
    border:solid;
    border-radius: 8px;
    cursor: pointer;
    transition: all .5s;
  }

  button:hover {
    transform: scale(1.01,1.03);
  }
</style>
