import { Mutations, MutationsInterface } from './mutations-types'

const mutations = (): MutationsInterface => ({
  [Mutations.SET_CALL_PRICES] (state, callPrices) {
    state.callPrices = callPrices
  },
  [Mutations.SET_RATE_PER_MINUTE] (state, rate) {
    state.ratePerMinute = rate
  }
})

export default mutations()
