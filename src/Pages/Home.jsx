import { Link } from "react-router-dom";
import logo from "../assets/Prime-axis-exports.png";


export default function Home() {

return (

<div className="bg-[#fffaf0]">


{/* Hero Section */}

<section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">


<div>


{/* Company Logo */}

<img

src={logo}

alt="Prime Axis Exports Logo"

className="w-56 mb-6"

/>



<h1 className="text-5xl font-bold text-green-900 leading-tight">

Premium Indian Turmeric

<span className="text-yellow-600">
{" "}Exports Worldwide
</span>

</h1>



<p className="mt-6 text-lg text-gray-700 leading-relaxed">


Prime Axis Exports specializes in supplying premium-quality 
Indian turmeric powder and turmeric capsules to international markets.


<br /><br />


Our products are carefully sourced from trusted farms, processed 
with strict quality standards, and packed to meet global export 
requirements.


<br /><br />


From food and spice industries to wellness and nutraceutical 
applications, we deliver authentic turmeric solutions with rich 
color, excellent curcumin value, and reliable worldwide supply.


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

alt="Premium Turmeric Products"

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

Authentic Indian turmeric with natural color, purity, 
and excellent curcumin value.

</p>


</div>





<div className="bg-green-800 p-8 rounded-xl">


<h3 className="text-xl font-bold">

🌎 Worldwide Supply

</h3>


<p className="mt-3">

Reliable export solutions for international buyers 
and distributors.

</p>


</div>





<div className="bg-green-800 p-8 rounded-xl">


<h3 className="text-xl font-bold">

📦 Export Packaging

</h3>


<p className="mt-3">

Custom packaging options designed according to 
customer and market requirements.

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


<p className="mt-4 text-gray-700">


Premium quality turmeric powder from India suitable 
for food, spice, and commercial industries.

</p>


</div>






<div className="bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transition">


<h3 className="text-2xl font-bold text-yellow-600">

Turmeric Capsules

</h3>


<p className="mt-4 text-gray-700">


High-quality turmeric capsules for wellness and 
nutraceutical markets worldwide.

</p>


</div>


</div>


</section>







{/* Export Message */}


<section className="bg-[#f5e8c8] py-14 px-10 text-center">


<h2 className="text-3xl font-bold text-green-900">

Delivering The Golden Essence Of India To The World

</h2>


<p className="mt-5 text-gray-700 max-w-4xl mx-auto">


Prime Axis Exports focuses on quality, trust, and long-term 
partnerships by delivering premium turmeric products to global buyers.


</p>


</section>







{/* Call To Action */}


<section className="bg-yellow-600 text-white text-center py-16">


<h2 className="text-4xl font-bold">

Looking For A Reliable Turmeric Supplier?

</h2>



<p className="mt-4 text-lg">

Contact Prime Axis Exports for premium turmeric products 
and international supply solutions.

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