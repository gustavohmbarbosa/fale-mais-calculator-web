export interface Code {
    id: number,
    code: string,
    created_at: string,
    updated_at: string,
}

export interface State {
    codes: Code[],
    originCode: null|number,
    availableDestinationsByOriginCode: Code[],
}
