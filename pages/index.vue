<template>
  <div class="w-full lg:w-2/3 m-auto" @keypress.enter="calculate()">
    <PageHeader />
    <SearchArea />
    <button :disabled="!(minutes > 0)" @click="calculate()">
      Calcular
    </button>

    <div v-if="plans.length" class="plans-content mt-10">
      <h2 class="text-4xl text-center mb-4">
        <strong>Planos</strong>
      </h2>

      <p class="text-center">
        Valores de ligações de <strong>{{ originCode }}</strong> para
        <strong>{{ destinyCode }}</strong> <br> *R$ <strong>{{ ratePerMinute }}</strong> por minuto
      </p>

      <div class="plans grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 lg:mx-0">
        <template v-for="plan in plans">
          <PlanCard
            :key="plan.name"
            :name="plan.name"
            :minutes="plan.minutes_per_mouth"
            :value="plan.price_with_plan"
            :vanilla-value="plan.price_without_plan"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import PageHeader from '@/components/PageHeader.vue'
import SearchArea from '@/components/SearchArea.vue'
import PlanCard from '@/components/PlanCard.vue'
import { Actions } from '~/store/Plans/actions-types'
import { Plan } from '~/store/Plans/state-types'

interface Head {
  title: string
}

export default Vue.extend({
  name: 'IndexPage',
  components: {
    PageHeader,
    SearchArea,
    PlanCard
  },
  head (): Head {
    return {
      title: 'FaleMais Calculator | Telzir'
    }
  },
  computed: {
    plans (): Plan[] {
      return this.$store.state.Plans.plans
    },
    ...mapState('CallPrices', ['ratePerMinute', 'minutes']),
    ...mapState('Codes', ['originCode', 'destinyCode'])
  },
  methods: {
    calculate (): void {
      this.getPlans({
        rate: this.ratePerMinute,
        minutes: this.minutes
      })
    },
    ...mapActions('Plans', {
      getPlans: Actions.GET_PLANS_WITH_PRICES
    })
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

  button[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    background-color: #2B2C28;
  }
</style>
