import { Store } from 'vuex'
import { State } from './state-types'

export enum Actions {
    GET_ALL_CALL_PRICES = 'GET_ALL_CALL_PRICES'
}

export interface ActionsInterface {
    [x: string]: any
    [Actions.GET_ALL_CALL_PRICES] (store: Store<State>): void
}
