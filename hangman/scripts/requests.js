const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`,{})
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error ('unable to get puzzle')
  }
}

const getCountryDetails = async (countryCode) => {
   const response = await fetch ('//restcountries.eu/rest/v2/all',{})
   if (response.status === 200) {
    const countries = await response.json()  //return a promise
    return countries.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error ('unable to get puzzle')
  }
}

const getLocation = async () => {
  const response = await fetch ('//ipinfo.io/json?token=da56c0c1bf7261',{})
    if (response.status === 200) {
      const location = await response.json() 
      return location 
    } else {
      throw new Error ('unable to fetch Location')
    }
  }
  
  // const getCurrentCountry = async () => {
  //   const ipInfoLocation = await getLocation()
  //   return getCountryDetails(ipInfoLocation.country)
  // }


