import { hasPath, pathOr, pipe } from 'ramda'

import { loader } from '../../service.utils'

const loadExchangeRate = ({ fromCurrency = 'EUR', toCurrency = 'CAD' }) =>
  fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_KEY}`)
    .then(data => data.json())

const validateExchangeRate = hasPath(['Realtime Currency Exchange Rate', '5. Exchange Rate'])

const transformExchangeRate = pipe(
  pathOr('1', ['Realtime Currency Exchange Rate', '5. Exchange Rate']),
  Number.parseFloat
)

const getExchangeRate = loader({
  loader: loadExchangeRate,
  validator: validateExchangeRate,
  transform: transformExchangeRate
})

export default getExchangeRate

