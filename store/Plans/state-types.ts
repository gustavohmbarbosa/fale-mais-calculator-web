export interface Plan {
    name: string,
    minutes_per_mouth: number,
    price_with_plan: string,
    price_without_plan: string
}

export interface State {
    plans: Plan[]
}
