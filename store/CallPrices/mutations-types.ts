import { MutationTree } from 'vuex'
import { State, CallPrice } from './state-types'

export enum Mutations {
    SET_CALL_PRICES = 'SET_CALL_PRICES'
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
    [Mutations.SET_CALL_PRICES] (state: State, callPrices: CallPrice[]): void
}
