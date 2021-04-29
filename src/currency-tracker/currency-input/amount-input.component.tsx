import React, { ChangeEvent } from 'react';
import {
  NumberInput,
  NumberInputField
} from "@chakra-ui/react"

interface Props {
  value: number,
  onBlur: (value: number) => void
}

const AmountInput = ({ onBlur }: Props) => {
  const handleOnBlur= (event: ChangeEvent<HTMLInputElement>) => {
    onBlur(Number.parseFloat(event.target.value))
  }

  return (
      <NumberInput precision={2} min={0} onBlur={handleOnBlur}>
        <NumberInputField />
      </NumberInput>
  );
}

export default AmountInput