import { Mutations } from './mutations-types'
import { Actions, ActionsInterface } from './actions-types'

const actions = (): ActionsInterface => ({
  [Actions.GET_PLANS_WITH_PRICES] ({ commit }, { rate, minutes }) {
    this.$PlanService.get(`/plans?rate=${rate}&minutes=${minutes}`).then(({ data }: any) => {
      commit(Mutations.SET_PLANS, data)
    })
  }
})

export default actions()
