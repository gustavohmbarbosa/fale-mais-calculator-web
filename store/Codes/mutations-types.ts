import { MutationTree } from 'vuex'
import { State, Code } from './state-types'

export enum Mutations {
    SET_CODES = 'SET_CODES',
    SET_ORIGIN_CODE = 'SET_ORIGIN_CODE',
    SET_AVAILABLE_DESTINATIONS = 'SET_AVAILABLE_DESTINATIONS'
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
    [Mutations.SET_CODES](state: State, codes: Code[]): void
    [Mutations.SET_ORIGIN_CODE](state: State, code: number): void
    [Mutations.SET_AVAILABLE_DESTINATIONS](state: State, codes: Code[]): void
}
