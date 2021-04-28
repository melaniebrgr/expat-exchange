import { loader } from '../service.utils'

const loadCurrencyExchangeRate = () =>
  fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo`)
    .then(data => data.json())

const validateCurrencyExchangeRate = () => true

const transformCurrencyExchangeRate = (x: any) => { console.log(x); return x }

const getCurrencyExchangeRate = loader({
  loader: loadCurrencyExchangeRate,
  validator: validateCurrencyExchangeRate,
  transform: transformCurrencyExchangeRate
})

export default getCurrencyExchangeRate

