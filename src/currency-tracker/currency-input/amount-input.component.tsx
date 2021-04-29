import React, { ChangeEvent } from 'react';
import {
  NumberInput,
  NumberInputField
} from "@chakra-ui/react"

interface Props {
  onBlur: (value: string) => void
}

const AmountInput = ({ onBlur }: Props) => {
  const handleOnBlur= (event: ChangeEvent<HTMLInputElement>) => {
    onBlur(event.target.value)
  }

  return (
      <NumberInput defaultValue={1} precision={2} min={0} onBlur={handleOnBlur}>
        <NumberInputField />
      </NumberInput>
  );
}

export default AmountInput