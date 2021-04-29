import React from 'react'
import {
  Text
} from "@chakra-ui/react"

interface Props {
  value: string
}

const AmountOutput = ({ value }: Props) => {
  return (
    <Text>{ value }</Text>
  );
}

export default AmountOutput

