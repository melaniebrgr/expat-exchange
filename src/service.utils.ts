export const loader = ({ loader, validator, transform }: any) => 
  (...args: any[]) => 
    loader(...args)
      .catch(() => {
        console.log('ERROR: NETWORK')
        Promise.reject(null)
      })
      .then((data: any) => 
        validator(data)
          ? Promise.resolve(transform(data))
          : (console.log('ERROR: INVALID DATA'), Promise.reject(null))
      )
