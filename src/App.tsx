import React from 'react'
import {
  Box,
  Heading
} from "@chakra-ui/react"

import CurrencyTracker from './currency-tracker/currency-tracker.component'

function App() {
  return (
    <Box margin={10}>
      <Heading>Expat Exchange</Heading>
      <CurrencyTracker />
    </Box>
  );
}

export default App
