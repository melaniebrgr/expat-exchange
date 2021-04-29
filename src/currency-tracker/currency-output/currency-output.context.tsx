import { createContext } from 'react'

type Context = {
  from: {
    value: string,
    setter: (value: string) => void
  },
  to: {
    value: string,
    setter: (value: string) => void
  },
  rate: {
    value: number,
    setter: (value: number) => void
  },
  amount: {
    value: number,
    setter: (value: number) => void
  }
}

const currency = {
  from: {
    value: 'EUR',
    setter: () => {}
  },
  to: {
    value: 'CAD',
    setter: () => {}
  },
  rate: {
    value: 1,
    setter: () => {}
  },
  amount: {
    value: 0,
    setter: () => {}
  }
}

export const CurrencyContext = createContext<Context>(currency);