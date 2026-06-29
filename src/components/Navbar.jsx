import { Link } from "react-router-dom";
import logo from "../assets/Prime-axis-exports.png";


export default function Navbar(){

return(

<nav className="bg-green-900 px-8 py-4 flex items-center justify-between">


{/* Logo + Company Name */}

<div className="flex items-center gap-3">


<img

src={logo}

alt="Prime Axis Exports"

className="w-20 h-20 object-contain"

/>


<div>


<h1 className="text-2xl font-bold text-white">

PRIME AXIS EXPORTS

</h1>


<p className="text-sm text-white tracking-wide">

PREMIUM EXPORTS • GLOBAL REACH

</p>


</div>


</div>





{/* Menu */}

<div className="flex gap-6 text-white">


<Link to="/">
Home
</Link>


<Link to="/about">
About
</Link>


<Link to="/products">
Products
</Link>


<Link to="/export">
Export
</Link>


<Link to="/contact">
Contact
</Link>


</div>



</nav>

)

}