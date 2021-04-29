import React, { useState } from 'react'
import { CurrencyContext } from './currency-output.context'
import { DailyExchangeRate } from '../currency-input/currency-input.type'

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const CurrencyProvider = ({ children }: Props) => {
  const [ fromCurrency, setFromCurrency ] = useState<string>('EUR')
  const [ toCurrency, setToCurrency ] = useState<string>('CAD')
  const [ rate, setRate ] = useState<number>(1)
  const [ rates, setRates ] = useState<DailyExchangeRate[]>([])
  const [ amount, setAmount ] = useState<number>(0)
  
  const currencyStore = {
    from: {
      value: fromCurrency,
      setter: setFromCurrency
    },
    to: {
      value: toCurrency,
      setter: setToCurrency
    },
    rate: {
      value: rate,
      setter: setRate
    },
    rates: {
      value: rates,
      setter: setRates      
    },
    amount: {
      value: amount,
      setter: setAmount
    },
  }

  return (
    <CurrencyContext.Provider value={currencyStore}>
      { children }
    </CurrencyContext.Provider>
  );
}