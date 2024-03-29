<template>
  <div class="search-area">
    <div class="search-items">
      <div class="item origin">
        <label for="origin">Qual o DDD de onde você vai ligar?</label>
        <select id="origin" v-model="origin" class="text-black hover:border-gray border-black">
          <option value="" hidden />
          <option v-for="code in codes" :key="code.id">
            {{ code.code }}
          </option>
        </select>
      </div>

      <div class="item destiny">
        <label for="destiny">Qual o DDD de destino?</label>
        <select id="destiny" v-model="destiny" class="text-black hover:border-gray border-black">
          <option value="" hidden />
          <option v-for="code in availableDestinationsByOriginCode" :key="code.id">
            {{ code.code }}
          </option>
        </select>
      </div>

      <div class="item price text-black">
        Custo por minuto <strong>R$ {{ ratePerMinute }}</strong>
      </div>
    </div>

    <div class="item minutes">
      <label for="minutes">Quantos minutos você pretende usar? </label>
      <input id="minutes" v-model="minutes" type="number" min="0" class="text-black hover:border-gray border-black">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations, mapActions, mapState } from 'vuex'
import { Code } from '~/store/Codes/state-types'
import { Actions as CodesActions } from '~/store/Codes/actions-types'
import { Mutations as CodesMutations } from '~/store/Codes/mutations-types'
import { Actions as CallPricesActions } from '~/store/CallPrices/actions-types'
import { Mutations as CallPricesMutations } from '~/store/CallPrices/mutations-types'
import { Mutations as PlansMutations } from '~/store/Plans/mutations-types'

export default Vue.extend({
  name: 'SearchArea',
  data () {
    return {
      origin: '',
      destiny: '',
      minutes: null as null|number
    }
  },
  computed: {
    codes (): Code[] {
      return this.$store.state.Codes.codes
    },
    availableDestinationsByOriginCode (): Code[] {
      return this.$store.state.Codes.availableDestinationsByOriginCode
    },
    ...mapState('CallPrices', ['ratePerMinute'])
  },
  watch: {
    origin (originCode) {
      this.setPlans([])
      this.destiny = ''
      this.setRate(0)
      if (originCode) {
        this.setOriginCode(originCode)
        this.getAvailableDestinationsByOriginCode()
      }
    },
    destiny (destinyCode) {
      this.setDestinyCode(destinyCode)
      if (this.origin && destinyCode) {
        this.getRatePerMinute({
          origin: this.origin,
          destiny: destinyCode
        })
      }
    },
    minutes (value) {
      this.setMinutes(value)
    }
  },
  created () {
    this.getAllCodes()
  },
  methods: {
    ...mapMutations('Codes', {
      setOriginCode: CodesMutations.SET_ORIGIN_CODE,
      setDestinyCode: CodesMutations.SET_DESTINY_CODE
    }),
    ...mapMutations('CallPrices', {
      setRate: CallPricesMutations.SET_RATE_PER_MINUTE,
      setMinutes: CallPricesMutations.SET_MINUTES
    }),
    ...mapMutations('Plans', {
      setPlans: PlansMutations.SET_PLANS
    }),
    ...mapActions('Codes', {
      getAllCodes: CodesActions.GET_ALL_CODES,
      getAvailableDestinationsByOriginCode: CodesActions.GET_AVAILABLE_DESTINATIONS_BY_ORIGIN_CODE
    }),
    ...mapActions('CallPrices', {
      getRatePerMinute: CallPricesActions.GET_RATE_PER_MINUTE
    })
  }
})
</script>

<style scoped>
  .search-area {
    padding: 0.5rem;
    padding-top: 3rem;
    border-radius: 8px;
    border-color: black;
  }

  .search-area .title{
    margin-top: 0;
    margin-bottom: 12px;
    text-align: center;
    font-weight: 400;
  }

  .search-items {
    display: flex;
    justify-content: space-between;
  }

  .item.minutes {
    margin-top: 10px;
    margin-bottom: 0;
  }

  .item.price strong {
    border-bottom: solid;
  }

  select {
    appearance: none;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    line-height: inherit;
    border: none;
    border-bottom: solid;
    outline: none;
    margin: 0;
  }

  select::-ms-expand {
    display: none;
  }

  input {
    appearance: none;
    background-color: transparent;
    font-size: inherit;
    cursor: pointer;
    line-height: inherit;
    border: none;
    border-bottom: solid;
    outline: none;
    margin: 0;
    max-width: 45px;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;

  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;

  }

  @media screen and (max-width: 900px) {
    .search-items {
      display: block;
    }

    .item {
      margin-bottom: 20px;
    }

    .search-area {
      padding-top: 1rem;
    }
  }
</style>
