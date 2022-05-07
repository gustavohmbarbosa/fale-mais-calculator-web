import { ActionsInterface, Actions } from './actions-types'
import { Mutations } from './mutations-types'

const actions = (): ActionsInterface => ({
  [Actions.GET_ALL_CALL_PRICES] ({ commit }) {
    this.$CodeService.get('/codes').then((response: any) => {
      commit(Mutations.SET_CALL_PRICES, response.data)
    })
  }
})

export default actions()
