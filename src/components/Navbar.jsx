import { Link } from "react-router-dom";

export default function Navbar(){

return(

<nav className="bg-green-900 text-white px-8 py-5 flex justify-between">

<h1 className="text-2xl font-bold">
Prime Axis Exports
</h1>


<div className="space-x-5">

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/products">Products</Link>
<Link to="/export">Export</Link>
<Link to="/contact">Contact</Link>

</div>


</nav>

)

}