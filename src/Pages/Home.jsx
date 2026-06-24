import { Link } from "react-router-dom";

export default function Home() {

return (

<div className="bg-[#fffaf0]">


{/* Hero Section */}

<section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">


<div>


<h1 className="text-5xl font-bold text-green-900 leading-tight">

Premium Turmeric

<span className="text-yellow-600">
 {" "}Exports Worldwide
</span>

</h1>


<p className="mt-6 text-lg text-gray-700">

Prime Axis Exports delivers high quality
turmeric powder and turmeric capsules
from India to global markets.

</p>


<div className="mt-8 space-x-4">


<Link
to="/products"
className="bg-yellow-600 text-white px-8 py-3 rounded-full hover:bg-yellow-700 transition"
>

View Products

</Link>



<Link
to="/contact"
className="border border-green-900 text-green-900 px-8 py-3 rounded-full hover:bg-green-900 hover:text-white transition"
>

Contact Us

</Link>


</div>


</div>



<div className="rounded-3xl overflow-hidden shadow-xl">


<img

src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7"

className="w-full h-[400px] object-cover"

/>


</div>


</section>





{/* Highlights */}


<section className="bg-green-900 text-white py-14 px-10">


<h2 className="text-3xl font-bold text-center">

Why Choose Prime Axis Exports?

</h2>



<div className="grid md:grid-cols-3 gap-8 mt-10">


<div className="bg-green-800 p-8 rounded-xl">

<h3 className="text-xl font-bold">
🌱 Premium Quality
</h3>

<p className="mt-3">
Naturally processed turmeric with excellent color and curcumin value.
</p>

</div>




<div className="bg-green-800 p-8 rounded-xl">

<h3 className="text-xl font-bold">
🌎 Worldwide Supply
</h3>

<p className="mt-3">
Reliable export services for international buyers.
</p>

</div>





<div className="bg-green-800 p-8 rounded-xl">

<h3 className="text-xl font-bold">
📦 Export Packaging
</h3>

<p className="mt-3">
Custom packaging solutions based on customer requirements.
</p>

</div>


</div>


</section>






{/* Products Preview */}


<section className="px-10 py-16">


<h2 className="text-4xl font-bold text-center text-green-900">

Our Main Products

</h2>



<div className="grid md:grid-cols-2 gap-10 mt-10">



<div className="bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transition">


<h3 className="text-2xl font-bold text-yellow-600">

Turmeric Powder

</h3>


<p className="mt-4">

High quality turmeric powder suitable for food,
spice and wellness industries.

</p>


</div>






<div className="bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transition">


<h3 className="text-2xl font-bold text-yellow-600">

Turmeric Capsules

</h3>


<p className="mt-4">

Premium turmeric capsules for health and
nutraceutical markets.

</p>


</div>



</div>


</section>





{/* Call To Action */}


<section className="bg-yellow-600 text-white text-center py-16">


<h2 className="text-4xl font-bold">

Looking for a Reliable Turmeric Supplier?

</h2>


<p className="mt-4 text-lg">

Get in touch with us for export enquiries.

</p>


<Link

to="/contact"

className="inline-block mt-6 bg-white text-yellow-700 px-8 py-3 rounded-full font-bold"

>

Request Quote

</Link>


</section>



</div>

)

}