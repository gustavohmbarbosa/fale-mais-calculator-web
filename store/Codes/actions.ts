import { ActionsInterface, Actions } from './actions-types'
import { Mutations } from './mutations-types'

const actions = (): ActionsInterface => ({
  [Actions.GET_ALL_CODES] ({ commit }) {
    this.$CodeService.get('/codes').then((response: any) => {
      commit(Mutations.SET_CODES, response.data)
    })
  },
  [Actions.GET_AVAILABLE_DESTINATIONS_BY_ORIGIN_CODE] ({ commit, state }) {
    this.$CodeService.get(`/codes/${state.originCode}/available-destinations`).then((response: any) => {
      commit(Mutations.SET_AVAILABLE_DESTINATIONS, response.data)
    })
  }
})

export default actions()
