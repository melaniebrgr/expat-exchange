import React, { ChangeEvent } from 'react';
import {
  Select,
} from "@chakra-ui/react"
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
        <option value="CAD">CAD</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </Select>
  );
}

export default CurrencySelect