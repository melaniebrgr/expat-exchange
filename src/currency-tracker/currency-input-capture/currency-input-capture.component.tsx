import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react"

export default () => {
  const [currency, setCurrency] = useState('CAD')
  const handleSetCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value)
  }

  return (
    <Box>
      <Select
        value={currency}
        onChange={handleSetCurrency}
      >
        <option value="CAD">CAD</option>
        <option value="USD">USD</option>
      </Select>
      <NumberInput defaultValue={1} precision={2} min={0}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
}