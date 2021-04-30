import { has, pipe, propOr, takeLast, mapObjIndexed, sort, values } from 'ramda'

import { loader } from '../../service.utils'
import { DailyExchangeRate } from './currency-input.type'

const loadDailyExchangeRates = ({ fromCurrency = 'EUR', toCurrency = 'CAD' }) =>
  fetch(`https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${fromCurrency}&to_symbol=${toCurrency}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_KEY}`)
    .then(data => data.json())

const validateDailyExchangeRates = has('Time Series FX (Daily)')

const transformDailyExchangeRates = pipe(
  propOr({}, 'Time Series FX (Daily)'),
  // @ts-ignore: no overload matches call
  mapObjIndexed((value: any, key: string): DailyExchangeRate => ({ 
    date: key,
    timestamp: new Date(key).getTime(), 
    value: Number.parseFloat(value['1. open'])
  })),
  values,
  // @ts-ignore: no overload matches call
  sort((a: DailyExchangeRate, b: DailyExchangeRate) => a.timestamp - b.timestamp),
  takeLast(30)
)

const getDailyExchangeRates = loader({
  loader: loadDailyExchangeRates,
  validator: validateDailyExchangeRates,
  transform: transformDailyExchangeRates
})

export default getDailyExchangeRates

