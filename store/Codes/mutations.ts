import { MutationsInterface, Mutations } from './mutations-types'

const mutations = (): MutationsInterface => ({
  [Mutations.SET_CODES] (state, codes) {
    state.codes = codes
  },
  [Mutations.SET_ORIGIN_CODE] (state, code) {
    state.originCode = code
  },
  [Mutations.SET_DESTINY_CODE] (state, code) {
    state.destinyCode = code
  },
  [Mutations.SET_AVAILABLE_DESTINATIONS] (state, codes) {
    state.availableDestinationsByOriginCode = codes
  }
})

export default mutations()
