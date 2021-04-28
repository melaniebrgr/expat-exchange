import React from 'react'
import {
  Heading
} from "@chakra-ui/react"

import CurrencyInputTracker from './currency-tracker/currency-input-capture/currency-input-capture.component'
import CurrencyOutput from './currency-tracker/currency-output/currency-output.component'

function App() {
  return (
    <>
      <Heading>Expat Exchange</Heading>
      <CurrencyInputTracker />
      <CurrencyOutput />
    </>
  );
}

export default App
