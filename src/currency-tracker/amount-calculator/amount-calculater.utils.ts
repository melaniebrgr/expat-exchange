export const calculateAmount = (amount: number, rate: number) => {
  return Number(amount * rate).toFixed(2)
}