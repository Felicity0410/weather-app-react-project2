import axios from 'axios'

const API_KEY ='7cf07bbab1314ae789e980b155802c9b'
const IPGEOLOCATION_URL = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`

export const getUserIpLocation = async () => {
    try {
        const response = await axios.get(IPGEOLOCATION_URL)
        const city = await response.data.city
        console.log(`city: ${city}`);
        return city
    } catch (error) {
        console.error(error);
    }
}




