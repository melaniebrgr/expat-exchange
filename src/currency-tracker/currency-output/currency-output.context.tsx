import { createContext } from 'react'

import { DailyExchangeRate } from '../currency-input/currency-input.type'

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
  rates: {
    value: DailyExchangeRate[],
    setter: (value: DailyExchangeRate[]) => void
  }
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
    value: 0,
    setter: () => {}
  },
  rates: {
    value: [],
    setter: () => {}
  },
  amount: {
    value: 0,
    setter: () => {}
  }
}

export const CurrencyContext = createContext<Context>(currency);