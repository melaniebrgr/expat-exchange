import React, { useContext, useEffect, useCallback, useMemo } from 'react'
import {
  Box
} from "@chakra-ui/react"

import CurrencySelect from './currency-input/currency-select.component'
import AmountInput from './currency-input/amount-input.component'
import AmountOutput from './currency-output/amount-output.component'
import HistoricalRates from './currency-output/historical-rates.component'
import getExchangeRate from './currency-input/get-exchange-rate.service'
import getDailyExchangeRates from './currency-input/get-daily-exchange-rates.service'
import { CurrencyContext } from './currency-output/currency-output.context'
import { calculateAmount } from './amount-calculator/amount-calculater.utils'

const CurrencyTracker = () => {
  const { from, to, rate, rates, amount } = useContext(CurrencyContext); 

  const loadExchangeRate = useCallback(
    () => {
      getExchangeRate({ fromCurrency: from.value, toCurrency: to.value })
        .then(rate.setter, () => {})
    }, [from.value, to.value]
  )

  const loadDailyExchangeRates = useCallback(
    () => {
      getDailyExchangeRates({ fromCurrency: from.value, toCurrency: to.value })
        .then(rates.setter, () => {})
    }, [from.value, to.value]
  )

  useEffect(
    () => { 
      loadExchangeRate()
      loadDailyExchangeRates()
    }, [loadExchangeRate, loadDailyExchangeRates, from.value, to.value]
  );

  const toAmount = useMemo(() => calculateAmount(amount.value, rate.value), [amount.value, rate.value]);
  const toRates = useMemo(() => rates.value.map((x, i) => ({ x: i, y: x.value })), [from.value, to.value]);
  
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
        <HistoricalRates values={toRates}/>
      </Box>
    </>
  );
}

export default CurrencyTracker