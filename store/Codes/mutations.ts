import { MutationsInterface, Mutations } from './types'

export default {
  [Mutations.SET_CODES] (state, codes) {
    state.codes = codes
  }
} as MutationsInterface
