import React, { ChangeEvent, useState } from 'react'
import {
  Box,
  Text,
  Select
} from "@chakra-ui/react"

export default () => {
  const [currency, setCurrency] = useState('EUR')
  const handleSetCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value)
  }

  return (
      <Box>
        <Select
          value={currency}
          onChange={handleSetCurrency}
        >
          <option value="EUR">EUR</option>
        </Select>
        <Text>1</Text>
      </Box>
  );
}

