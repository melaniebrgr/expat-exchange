import React, { ChangeEvent } from 'react';
import {
  Select,
} from "@chakra-ui/react"

import currencyList from './currency-select.constants.json'
interface Props {
  value: string,
  onChange: (value: string) => void
}

const CurrencySelect = ({ value, onChange }: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
      <Select
        value={value}
        onChange={handleOnChange}
      >
        { currencyList.map( currency => ( <option key={currency.currencyCode} value={currency.currencyCode}>{ `${currency.currencyName} (${currency.currencyCode})` }</option>)) }
      </Select>
  );
}

export default CurrencySelect