import React from 'react'
import {
  Box,
  FormControl,
  Select
} from "@chakra-ui/react"

export default () => {
  return (
      <Box>
        <FormControl id="target-currency">
          <Select>
            <option>EUR</option>
          </Select>
        </FormControl>
      </Box>
  );
}

