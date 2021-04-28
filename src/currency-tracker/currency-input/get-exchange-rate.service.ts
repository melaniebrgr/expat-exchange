import { loader } from '../service.utils'

const loadExchangeRate = () =>
  fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo`)
    .then(data => data.json())

const validateExchangeRate = () => true

const transformExchangeRate = (x: any) => { console.log(x); return x }

const getExchangeRate = loader({
  loader: loadExchangeRate,
  validator: validateExchangeRate,
  transform: transformExchangeRate
})

export default getExchangeRate

