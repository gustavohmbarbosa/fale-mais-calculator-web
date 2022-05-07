import { ActionsInterface, Actions } from './actions-types'
import { Mutations } from './mutations-types'

const actions = (): ActionsInterface => ({
  [Actions.GET_ALL_CALL_PRICES] ({ commit }) {
    this.$CodeService.get('/call-prices').then((response: any) => {
      commit(Mutations.SET_CALL_PRICES, response.data)
    })
  },
  [Actions.GET_RATE_PER_MINUTE] ({ commit }, { origin, destiny }) {
    this.$CodeService.get(`/call-prices/${origin}/${destiny}/rate-per-minute`).then((response: any) => {
      commit(Mutations.SET_RATE_PER_MINUTE, response.data)
    })
  }
})

export default actions()
