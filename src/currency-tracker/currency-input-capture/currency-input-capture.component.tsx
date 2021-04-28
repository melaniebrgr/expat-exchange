import React, { useEffect } from 'react';
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
  return (
    <Box>
      <FormControl id="base-currency">
        <Select>
          <option>CAD</option>
        </Select>
      </FormControl>
      <FormControl id="amount">
        <FormLabel>Amount</FormLabel>
        <NumberInput max={50} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </Box>
  );
}