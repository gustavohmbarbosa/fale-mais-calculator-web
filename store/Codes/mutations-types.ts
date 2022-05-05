import { MutationTree } from 'vuex'
import { State, Code } from './state-types'

export enum Mutations {
    SET_CODES = 'SET_CODES'
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
    [Mutations.SET_CODES](state: State, codes: Code[]): void
}
