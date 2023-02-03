

const API_KEY = '49FFDB5046C0030BA7177B228803FB77'
const IP2LOCATION_URL = `https://api.ip2location.io`
// const IP2LOCATION_URL = `https://api.ip2location.com/v2/lookup?ip=${userIp}&key=${API_KEY}&package=WS24`

const getUserIp = async () => {
    const response = await window.fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    const ip = data.ip
    return ip  
}

export const getUserIpCity = async () => {

    const ip = await getUserIp()
    const url = new URL(IP2LOCATION_URL)

    url.searchParams.append('ip', ip)
    url.searchParams.append('key', API_KEY)
    

    try {
        const response = await fetch(url)
        const data = await response.json()
        const city = data.city_name
        return city

    } catch (error) {
        console.error('from Ip2location', error);
        return error
    }

}



