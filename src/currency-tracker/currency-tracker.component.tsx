import React from 'react'
import {
  Box
} from "@chakra-ui/react"

import CurrencySelect from './currency-input/currency-select.component'
import AmountInput from './currency-input/amount-input.component'
import AmountOutput from './currency-output/amount-output.component'

const CurrencyTracker = () => {
  return (
    <>
      <Box>
        <CurrencySelect />
        <AmountInput />
      </Box>
      <Box>
        <CurrencySelect />
        <AmountOutput />
      </Box>
    </>
  );
}

export default CurrencyTracker