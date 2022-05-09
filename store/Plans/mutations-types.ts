import { MutationTree } from 'vuex'
import { Plan, State } from './state-types'

export enum Mutations {
    SET_PLANS = 'SET_PLANS'
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
    [Mutations.SET_PLANS] (state: State, plans: Plan[]): void
}
