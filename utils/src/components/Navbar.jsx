import { Link } from 'react-router-dom'


export default function Navbar(){
return (
<nav className="bg-white shadow p-4">
<div className="container mx-auto flex gap-4">
<Link to="/" className="font-bold">Home</Link>
<Link to="/users">Users</Link>
<Link to="/countries">Countries</Link>
</div>
</nav>
)
}