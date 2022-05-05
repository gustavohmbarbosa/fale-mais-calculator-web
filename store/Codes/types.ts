import { MutationTree, Store } from 'vuex'

export interface Code {
    id: number,
    code: string,
    created_at: string,
    updated_at: string,
}

export interface State {
    codes: Code[]
}

export enum Mutations {
    SET_CODES = 'SET_CODES'
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
    [Mutations.SET_CODES](state: State, codes: Code[]): void
}

export enum Actions {
    GET_ALL_CODES = 'GET_ALL_CODES'
}

export interface ActionsInterface {
    [x: string]: any
    [Actions.GET_ALL_CODES] (store: Store<State>): void
}
