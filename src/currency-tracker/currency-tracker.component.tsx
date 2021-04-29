import React, { useContext, useEffect, useCallback } from 'react'
import {
  Box
} from "@chakra-ui/react"

import CurrencySelect from './currency-input/currency-select.component'
import AmountInput from './currency-input/amount-input.component'
import getExchangeRate from './currency-input/get-exchange-rate.service'
import AmountOutput from './currency-output/amount-output.component'
import { CurrencyContext } from './currency-output/currency-output.context'

const CurrencyTracker = () => {
  const { from, to, rate } = useContext(CurrencyContext); 

  const loadExchangeRate = useCallback(
    async () => {
      const value = await getExchangeRate({ fromCurrency: from.value, toCurrency: to.value })
      rate.setter(value)
    }, [from.value, to.value, rate]
  )

  useEffect(() => { loadExchangeRate() }, [loadExchangeRate, from.value, to.value]);
  
  return (
    <>
      <Box>
        <CurrencySelect value={from.value} onChange={from.setter} />
        <AmountInput onBlur={ amount => console.log(amount) } />
      </Box>
      <Box>
        <CurrencySelect value={to.value} onChange={to.setter} />
        <AmountOutput value={rate.value * 1} />
      </Box>
    </>
  );
}

export default CurrencyTracker