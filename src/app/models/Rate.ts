export interface Rate {
    date: Date,
    currencies: Currencies[]
}

export interface Currencies {
    code: string,
    date: Date,
    diff: number,
    diffFormated: string,
    name: string,
    quantity: number,
    rate: number,
    rateFormated: string,
    validFromDate: Date
}