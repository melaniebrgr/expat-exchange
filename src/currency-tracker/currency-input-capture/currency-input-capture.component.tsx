import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react"

import getCurrencyExchangeRate from './currency-input-capture.service'

export default () => {
  const [currency, setCurrency] = useState('CAD')
  const handleSetCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value)
  }
  useEffect(getCurrencyExchangeRate, [currency]);

  return (
    <>
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
    </>
  );
}