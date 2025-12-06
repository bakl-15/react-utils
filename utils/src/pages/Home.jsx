import React from 'react'
import Navbar from '../components/Navbar'


export default function Home(){
return (
<div>
<Navbar />
<div className="p-6">
<h1 className="text-2xl font-bold">Dashboard</h1>
<p className="mt-2">Welcome to the starter project.</p>
</div>
</div>
)
}