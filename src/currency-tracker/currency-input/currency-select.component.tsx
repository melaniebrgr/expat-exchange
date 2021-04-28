import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Select,
} from "@chakra-ui/react"

import getExchangeRate from './get-exchange-rate.service'

const CurrencySelect = () => {
  const [currency, setCurrency] = useState('CAD')
  const handleSetCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value)
  }
  useEffect(getExchangeRate, [currency]);

  return (
      <Select
        value={currency}
        onChange={handleSetCurrency}
      >
        <option value="CAD">CAD</option>
        <option value="USD">USD</option>
      </Select>
  );
}

export default CurrencySelect