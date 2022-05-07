import { Mutations, MutationsInterface } from './mutations-types'

export default {
  [Mutations.SET_CALL_PRICES] (state, callPrices) {
    state.callPrices = callPrices
  }
} as MutationsInterface
