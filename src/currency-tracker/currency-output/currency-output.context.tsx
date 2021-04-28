import { createContext } from 'react'

type Context = {
  from: {
    value: string,
    setter: (value: string) => void
  },
  to: {
    value: string,
    setter: (value: string) => void
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
  }
}

export const CurrencyContext = createContext<Context>(currency);