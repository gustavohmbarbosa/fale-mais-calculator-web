import { Store } from 'vuex'
import { State } from './state-types'

export enum Actions {
    GET_ALL_CODES = 'GET_ALL_CODES'
}

export interface ActionsInterface {
    [x: string]: any
    [Actions.GET_ALL_CODES] (store: Store<State>): void
}
