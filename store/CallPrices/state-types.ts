import { Code } from '../Codes/state-types'

export interface CallPrice {
    id: number,
    origin: Code,
    destiny: Code,
    rate_per_minute: number,
    created_at: string,
    updated_at: string,
}

export interface State {
    callPrices: CallPrice[],
    ratePerMinute: number
}
