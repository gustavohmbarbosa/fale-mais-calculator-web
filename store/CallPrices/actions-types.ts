import { Store } from 'vuex'
import { State } from './state-types'

export enum Actions {
    GET_ALL_CALL_PRICES = 'GET_ALL_CALL_PRICES',
    GET_RATE_PER_MINUTE = 'GET_RATE_PER_MINUTE'
}

interface GetRatePerMinuteParams {
    origin: string,
    destiny: string
}

export interface ActionsInterface {
    [x: string]: any
    [Actions.GET_ALL_CALL_PRICES] (store: Store<State>): void
    [Actions.GET_RATE_PER_MINUTE] (store: Store<State>, params: GetRatePerMinuteParams): void
}
