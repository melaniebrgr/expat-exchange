import { loader } from '../service.utils'

const loadExchangeRate = ({ fromCurrency = 'EUR', toCurrency = 'CAD' }) =>
  fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_KEY}`)
    .then(data => data.json())

const validateExchangeRate = () => true

const transformExchangeRate = (x: any) => { console.log(x); return x }

const getExchangeRate = loader({
  loader: loadExchangeRate,
  validator: validateExchangeRate,
  transform: transformExchangeRate
})

export default getExchangeRate

