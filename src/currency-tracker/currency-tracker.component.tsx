import React, { useContext, useEffect } from 'react'
import {
  Box
} from "@chakra-ui/react"

import CurrencySelect from './currency-input/currency-select.component'
import AmountInput from './currency-input/amount-input.component'
import getExchangeRate from './currency-input/get-exchange-rate.service'
import AmountOutput from './currency-output/amount-output.component'
import { CurrencyContext } from './currency-output/currency-output.context'

const CurrencyTracker = () => {
  const { from, to } = useContext(CurrencyContext); 
  useEffect(() => getExchangeRate({ fromCurrency: from.value, toCurrency: to.value }), [from.value, to.value]);

  return (
    <>
      <Box>
        <CurrencySelect value={from.value} onChange={from.setter} />
        <AmountInput />
      </Box>
      <Box>
        <CurrencySelect value={to.value} onChange={to.setter} />
        <AmountOutput />
      </Box>
    </>
  );
}

export default CurrencyTracker