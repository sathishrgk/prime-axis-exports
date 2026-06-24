import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Export from "./Pages/Export";
import Contact from "./Pages/Contact";


function App(){

return(

<BrowserRouter>


<Navbar/>


<Routes>


<Route path="/" element={<Home/>}/>

<Route path="/about" element={<About/>}/>

<Route path="/products" element={<Products/>}/>

<Route path="/export" element={<Export/>}/>

<Route path="/contact" element={<Contact/>}/>


</Routes>


</BrowserRouter>

)

}


export default App;