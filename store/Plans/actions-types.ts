import { Store } from 'vuex'
import { State } from './state-types'

export enum Actions {
    GET_PLANS_WITH_PRICES = 'GET_PLANS_WITH_PRICES'
}

interface GetPlansParams {
    rate: number,
    minutes: number
}

export interface ActionsInterface {
    [x: string]: any
    [Actions.GET_PLANS_WITH_PRICES] (store: Store<State>, params: GetPlansParams): void
}
