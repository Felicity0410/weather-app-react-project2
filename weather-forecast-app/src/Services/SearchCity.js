const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd707adaaf9mshfe0f26ceaecaf2dp18c5aajsne1fa444ab30d',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'


export const fetchGeoCity = async (citySearch) => {
    const url = new URL(GEO_API_URL)
    url.searchParams.append('minPopulation', '1000000')
    url.searchParams.append('namePrefix', citySearch)

    try {
       const response =  await fetch(url, geoApiOptions)
       const data =  await response.json()
       return data
    } catch (error) {
        console.error('from city search service', error);
    }
}


   
