import React from 'react'
import { useCountries } from '../../api/countryApi'


export default function CountryList(){
const { data: countries = [], isLoading } = useCountries()
if (isLoading) return <div className="p-6">Loading...</div>


return (
<div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{countries.slice(0,30).map(c=> (
      <div key={c.name.common} className="bg-white p-4 rounded shadow">
      <h3 className="font-bold">{c.name.common}</h3>
      <p className="text-sm">Region: {c.region}</p>
      <p className="text-sm">Population: {c.population.toLocaleString()}</p>
      </div>
))}
</div>
)
}