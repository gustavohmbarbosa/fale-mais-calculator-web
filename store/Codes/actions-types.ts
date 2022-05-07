import { Store } from 'vuex'
import { State } from './state-types'

export enum Actions {
    GET_ALL_CODES = 'GET_ALL_CODES',
    GET_AVAILABLE_DESTINATIONS_BY_ORIGIN_CODE = 'GET_AVAILABLE_DESTINATIONS_BY_ORIGIN_CODE'
}

export interface ActionsInterface {
    [x: string]: any
    [Actions.GET_ALL_CODES] (store: Store<State>): void
    [Actions.GET_AVAILABLE_DESTINATIONS_BY_ORIGIN_CODE] (store: Store<State>, originCode: number): void
}
