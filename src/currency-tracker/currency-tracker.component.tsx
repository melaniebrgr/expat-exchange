import React from 'react'
import {
  Box
} from "@chakra-ui/react"

import CurrencyInputCapture from './currency-input-capture/currency-input-capture.component'
import CurrencyOutput from './currency-output/currency-output.component'

const CurrencyTracker = () => {
  return (
    <>
      <Box>
        <CurrencyInputCapture />
      </Box>
      <Box>
        <CurrencyOutput />
      </Box>
    </>
  );
}

export default CurrencyTracker