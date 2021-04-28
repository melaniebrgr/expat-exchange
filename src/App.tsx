import React from 'react'
import {
  Heading
} from "@chakra-ui/react"

import CurrencyTracker from './currency-tracker/currency-tracker.component'

function App() {
  return (
    <>
      <Heading>Expat Exchange</Heading>
      <CurrencyTracker />
    </>
  );
}

export default App
