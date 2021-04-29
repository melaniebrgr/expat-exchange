import React from 'react'
import {
  Text
} from "@chakra-ui/react"

interface Props {
  value: number
}

const AmountOutput = ({ value }: Props) => {
  return (
    <Text>{ value }</Text>
  );
}

export default AmountOutput

