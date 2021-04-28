export const loader = ({ loader, validator, transform }: any) => 
  (...args: any[]) => 
    loader(...args)
      .catch(() => {
        console.log('ERROR: NETWORK')
        Promise.reject({})
      })
      .then((data: any) => 
        validator(data)
          ? Promise.resolve(transform(data))
          : Promise.reject({})
      )
