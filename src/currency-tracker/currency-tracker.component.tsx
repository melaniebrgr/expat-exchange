import React, { useContext, useEffect, useCallback, useMemo } from 'react'
import {
  Box
} from "@chakra-ui/react"

import CurrencySelect from './currency-input/currency-select.component'
import AmountInput from './currency-input/amount-input.component'
import getExchangeRate from './currency-input/get-exchange-rate.service'
import AmountOutput from './currency-output/amount-output.component'
import HistoricalRates from './currency-output/historical-rates.component'
import { CurrencyContext } from './currency-output/currency-output.context'
import { calculateAmount } from './amount-calculator/amount-calculater.utils'

const CurrencyTracker = () => {
  const { from, to, rate, amount } = useContext(CurrencyContext); 

  const loadExchangeRate = useCallback(
    async () => {
      const value = await getExchangeRate({ fromCurrency: from.value, toCurrency: to.value })
      rate.setter(value)
    }, [from.value, to.value]
  )

  useEffect(() => { loadExchangeRate() }, [loadExchangeRate, from.value, to.value]);

  const toAmount = useMemo(() => calculateAmount(amount.value, rate.value), [amount.value, rate.value]);
  
  return (
    <>
      <Box>
        <CurrencySelect value={from.value} onChange={from.setter} />
        <AmountInput value={amount.value} onBlur={amount.setter} />
      </Box>
      <Box>
        <CurrencySelect value={to.value} onChange={to.setter} />
        <AmountOutput value={toAmount} />
      </Box>
      <Box>
        <HistoricalRates />
      </Box>
    </>
  );
}

export default CurrencyTracker