import { useMemo, useState } from "react";
import countryList from "react-select-country-list";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import Select from "react-select";
import "react-phone-number-input/style.css";


export default function Contact(){


const [country, setCountry] = useState("");



const countries = useMemo(() => {

return countryList().getData();

}, []);





const countryCodes = useMemo(() => {


return getCountries().map((item)=>({

value:item,

label:`+${getCountryCallingCode(item)} (${item})`

}));


}, []);





const inputStyle = 
"w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition";




return(

<div className="bg-[#fffaf0]">






{/* Header */}


<section className="px-10 py-16 text-center">


<h1 className="text-5xl font-bold text-green-900">

CONTACT PRIME AXIS EXPORTS

</h1>



<p className="mt-5 text-lg text-gray-700 max-w-3xl mx-auto">


Have a requirement or looking for a reliable export partner?
Share your details with us and our team will connect with you
to discuss your business requirements.


</p>


</section>









<section className="px-10 pb-20">


<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">








{/* Left Side */}



<div className="bg-green-900 text-white rounded-3xl p-10">


<h2 className="text-3xl font-bold">

Let's Build A Global Partnership

</h2>




<p className="mt-5 leading-relaxed">

At Prime Axis Exports, we bridge the gap between global buyers and trusted Indian suppliers by providing dependable export solutions with a strong focus on quality and excellence. Our commitment to international standards, efficient operations, and customer-focused service helps us build lasting partnerships across global markets.


</p>





<div className="mt-8 space-y-5">


<div>

<h3 className="text-yellow-400 font-bold">

📍 Location

</h3>

<p>

Tamil Nadu,India

</p>

</div>





<div>

<h3 className="text-yellow-400 font-bold">

📧 Email

</h3>

<p>

info@primeaxisexports.com

</p>

</div>






<div>

<h3 className="text-yellow-400 font-bold">

📞 Contact

</h3>

<p>

+91 98765 43210

</p>

</div>



</div>


</div>












{/* Enquiry Form */}



<div className="bg-white shadow-xl rounded-3xl p-10">


<h2 className="text-3xl font-bold text-green-900">

Send Your Enquiry

</h2>





<form className="mt-6 space-y-5">






<input

type="text"

placeholder="Your Name"

className={inputStyle}

/>







<input

type="text"

placeholder="Company Name"

className={inputStyle}

/>









{/* Country Code + Number */}



<div className="flex gap-3">


<div className="w-1/3">


<Select

options={countryCodes}

placeholder="Code"

isSearchable={true}

className="rounded-lg"

styles={{

control:(base)=>({

...base,

padding:"4px",

borderRadius:"8px",

boxShadow:"0 0 10px rgba(22,101,52,0.2)",

borderColor:"#d1d5db"

})

}}


/>


</div>






<input

type="tel"

placeholder="Contact Number"

className="w-2/3 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition"

/>



</div>









<input

type="email"

placeholder="Email Address"

className={inputStyle}

/>









<select

value={country}

onChange={(e)=>setCountry(e.target.value)}

className={inputStyle}

>


<option>

Select Country

</option>



{countries.map((item)=>(


<option

key={item.value}

value={item.label}

>


{item.label}


</option>


))}



</select>









<select

className={inputStyle}

>


<option>

Select Requirement

</option>


<option>

Product Enquiry

</option>


<option>

Bulk Order

</option>


<option>

Export Partnership

</option>


<option>

Other

</option>


</select>








<textarea

rows="5"

placeholder="Your Message"

className={inputStyle}

></textarea>








<button

type="submit"

className="w-full bg-yellow-600 text-white py-3 rounded-full font-bold hover:bg-yellow-700 transition shadow-lg"

>


Submit Enquiry


</button>





</form>


</div>






</div>


</section>









<section className="bg-green-900 text-white py-14 text-center">


<h2 className="text-3xl font-bold">

PREMIUM EXPORTS • GLOBAL REACH

</h2>



<p className="mt-3">

Connecting businesses worldwide with trusted export solutions.

</p>


</section>






</div>


)

}