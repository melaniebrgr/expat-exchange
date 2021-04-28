import React, { useState } from 'react'
import { CurrencyContext } from './currency-output.context'

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const CurrencyProvider = ({ children }: Props) => {
  const [ fromCurrency, setFromCurrency ] = useState<string>('EUR')
  const [ toCurrency, setToCurrency ] = useState<string>('CAD')

  const currencyStore = {
    from: {
      value: fromCurrency,
      setter: setFromCurrency
    },
    to: {
      value: toCurrency,
      setter: setToCurrency
    }
  }

  return (
    <CurrencyContext.Provider value={currencyStore}>
      { children }
    </CurrencyContext.Provider>
  );
}