import { ActionsInterface, Actions } from './actions-types'
import { Mutations } from './mutations-types'

const actions = (): ActionsInterface => ({
  [Actions.GET_ALL_CODES] ({ commit }) {
    this.$CodeService.get('/codes').then((response: any) => {
      commit(Mutations.SET_CODES, response.data)
    })
  }
})

export default actions()
