import { State } from './state-types'

export const state = (): State => ({
  codes: [],
  originCode: '',
  destinyCode: '',
  availableDestinationsByOriginCode: []
})
