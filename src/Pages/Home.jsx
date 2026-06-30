import { Link } from "react-router-dom";
import exportImage from "../assets/Prime-axis-exports-home.png";


export default function Home() {

return (

<div className="bg-[#fffaf0]">



{/* Hero Section */}


<section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">


<div>


<h1 className="text-5xl font-bold text-green-900 leading-tight">

Bringing India's Finest Quality

<span className="text-yellow-600">
{" "}To The World
</span>

</h1>





<p className="mt-6 text-lg text-gray-700 leading-relaxed">


Prime Axis Exports is a globally focused export company dedicated 
to delivering premium-quality products from India to international 
markets. We work with trusted suppliers and global buyers to create 
reliable sourcing solutions built on quality, transparency, and 
long-term business relationships.


<br /><br />


Our commitment goes beyond exporting products — we focus on 
building trust through professional service, consistent quality, 
efficient supply management, and smooth international trade 
operations. With a vision to represent Indian excellence worldwide, 
we connect global markets with dependable products and responsible 
business practices.

</p>





<div className="mt-8 space-x-4">


<Link

to="/products"

className="bg-yellow-600 text-white px-8 py-3 rounded-full hover:bg-yellow-700 transition"

>

Our Products

</Link>





<Link

to="/contact"

className="border border-green-900 text-green-900 px-8 py-3 rounded-full hover:bg-green-900 hover:text-white transition"

>

Contact Us

</Link>


</div>


</div>







{/* Export Image */}


<div className="rounded-3xl overflow-hidden shadow-xl">


<img

src={exportImage}

alt="Global Export and Logistics"

className="w-full h-[400px] object-cover"

/>


</div>


</section>









{/* About Section */}


<section className="px-10 py-16 bg-white">


<h2 className="text-4xl font-bold text-center text-green-900">

Your Trusted Partner For Global Trade

</h2>




<p className="max-w-5xl mx-auto mt-6 text-center text-gray-700 text-lg leading-relaxed">


At Prime Axis Exports, we believe international business is built 
on trust, reliability, and excellence. We carefully select quality 
products from trusted sources and provide professional export 
solutions that meet the expectations of customers worldwide.


<br /><br />


Our focus is to create strong partnerships by maintaining 
transparency, timely communication, and consistent service quality 
through every stage of the export journey.

</p>


</section>









{/* Why Choose Us */}


<section className="bg-green-900 text-white py-16 px-10">


<h2 className="text-4xl font-bold text-center">

Why Choose Prime Axis Exports?

</h2>





<div className="grid md:grid-cols-4 gap-8 mt-10">



<div className="bg-green-800 p-8 rounded-xl">


<h3 className="text-xl font-bold">

🌱 Premium Quality

</h3>


<p className="mt-3">

We focus on delivering products that meet high-quality expectations and international standards.

</p>


</div>






<div className="bg-green-800 p-8 rounded-xl">


<h3 className="text-xl font-bold">

🌎 Global Reach

</h3>


<p className="mt-3">

Connecting reliable Indian sourcing with international buyers across global markets.

</p>


</div>






<div className="bg-green-800 p-8 rounded-xl">


<h3 className="text-xl font-bold">

📦 Export Excellence

</h3>


<p className="mt-3">

Professional export handling with attention to packaging, documentation, and delivery.

</p>


</div>






<div className="bg-green-800 p-8 rounded-xl">


<h3 className="text-xl font-bold">

🤝 Trusted Partnership

</h3>


<p className="mt-3">

Building long-term relationships through trust, commitment, and transparency.

</p>


</div>



</div>


</section>









{/* Vision Section */}


<section className="py-16 px-10 bg-[#f5e8c8] text-center">


<h2 className="text-3xl font-bold text-green-900">

Connecting Indian Excellence With Global Opportunities

</h2>




<p className="max-w-4xl mx-auto mt-5 text-gray-700 text-lg">


Prime Axis Exports represents India's strength in global trade by 
connecting international markets with trusted export solutions.

</p>


</section>









{/* CTA */}


<section className="bg-yellow-600 text-white text-center py-16">


<h2 className="text-4xl font-bold">

Looking For A Reliable Export Partner?

</h2>




<p className="mt-4 text-lg">

Partner with Prime Axis Exports for quality sourcing and professional global export solutions.

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