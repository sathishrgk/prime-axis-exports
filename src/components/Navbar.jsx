import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Prime-axis-exports.png";


export default function Navbar(){


const [open,setOpen] = useState(false);



return(

<nav className="bg-green-900 px-6 md:px-10 py-4">


<div className="flex items-center justify-between">





{/* Logo Section */}


<Link to="/" className="flex items-center gap-3">


<img

src={logo}

alt="Prime Axis Exports"

className="w-16 h-16 md:w-20 md:h-20 object-contain"

/>


<div>


<h1 className="text-xl md:text-3xl font-bold text-white">

Prime Axis Exports

</h1>


<p className="text-xs md:text-sm text-white tracking-wide">

PREMIUM EXPORTS • GLOBAL REACH

</p>


</div>


</Link>








{/* Mobile Menu Button */}


<button

onClick={()=>setOpen(!open)}

className="md:hidden text-white text-3xl"

>


☰


</button>







{/* Desktop Menu */}


<div className="hidden md:flex gap-8 text-white font-medium">


<Link to="/" className="hover:text-yellow-400">

Home

</Link>


<Link to="/about" className="hover:text-yellow-400">

About

</Link>


<Link to="/products" className="hover:text-yellow-400">

Products

</Link>


<Link to="/export" className="hover:text-yellow-400">

Export

</Link>


<Link to="/contact" className="hover:text-yellow-400">

Contact

</Link>


</div>




</div>








{/* Mobile Menu */}


{open && (

<div className="md:hidden mt-5 flex flex-col gap-4 text-white font-medium">


<Link 
onClick={()=>setOpen(false)}
to="/"
>

Home

</Link>


<Link
onClick={()=>setOpen(false)}
to="/about"
>

About

</Link>


<Link
onClick={()=>setOpen(false)}
to="/products"
>

Products

</Link>


<Link
onClick={()=>setOpen(false)}
to="/export"
>

Export

</Link>


<Link
onClick={()=>setOpen(false)}
to="/contact"
>

Contact

</Link>



</div>

)}



</nav>


)

}