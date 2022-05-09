import { MutationTree } from 'vuex'
import { State, CallPrice } from './state-types'

export enum Mutations {
    SET_CALL_PRICES = 'SET_CALL_PRICES',
    SET_RATE_PER_MINUTE = 'SET_RATE_PER_MINUTE',
    SET_MINUTES = 'SET_MINUTES',
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
    [Mutations.SET_CALL_PRICES] (state: State, callPrices: CallPrice[]): void
    [Mutations.SET_RATE_PER_MINUTE] (state: State, rate: number): void
    [Mutations.SET_MINUTES] (state: State, minutes: number): void
}
