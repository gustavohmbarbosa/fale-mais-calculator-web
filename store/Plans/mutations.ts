import { Mutations, MutationsInterface } from './mutations-types'

const mutations = (): MutationsInterface => ({
  [Mutations.SET_PLANS] (state, plans) {
    state.plans = plans
  }
})

export default mutations()
