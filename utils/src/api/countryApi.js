import { useQuery } from '@tanstack/react-query'
import axios from '../api/axiosInstance'


const fetchCountries = async () => {
const { data } = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,flags')
return data
}


export function useCountries() {
return useQuery(['countries'], fetchCountries, { staleTime: 1000 * 60 * 5 })
}