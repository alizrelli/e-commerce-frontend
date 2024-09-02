import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Details from "./components/Details";

function App() {
  const [products, setproducts] = useState([
    {
      id:1,
      category: "TV",
      name: "Plasma TV set",
      price: 569.99,
      originalPrice: 699.0,
      discount: "19% off",
      rating: 4.5,
      reviews: 81,
      image: "https://www.lg.com/us/images/tvs/50pn5300/gallery/large01.jpg",
    },
    {
      id:2,
      category: "Phone",
      name: "Phone",
      price: 100.99,
      originalPrice: 123.0,
      discount: "18% off",
      rating: 4.0,
      reviews: 62,
      image: "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/i/p/iphone-14-128go-bleu-apple.jpg",
    },
    {
      id:3,
      category: "Appliances",
      name: "Appliances",
      price: 42.0,
      originalPrice: 50.0,
      discount: "18% off",
      rating: 4.5,
      reviews: 72,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhYvBU_pM-QP9Zv2a3KpGZnpQs6-KyZYo-w&s",
    },
    {
      id:4,
      category: "Photo & Video",
      name: "Photo & Video",
      price: 320.0,
      originalPrice: 390.0,
      discount: "18% off",
      rating: 4.5,
      reviews: 81,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENaGajwCcAfoReswzPsGBirytv-TcXTbKkg&s",
    },
    {
      id:5,
      category: "Gaming Consoles",
      name: "Gaming consoles",
      price: 85.0,
      originalPrice: 104.0,
      discount: "18% off",
      rating: 4.5,
      reviews: 81,
      image: "https://assets-prd.ignimgs.com/2023/10/10/ps5thumb-1696954542971.jpg",
    },
    {
      id:6,
      category: "Air Conditioning",
      name: "Air conditioning",
      price: 92.0,
      originalPrice: 112.0,
      discount: "18% off",
      rating: 4.5,
      reviews: 81,
      image: "https://aws-obg-image-lb-4.tcl.com/content/dam/brandsite/global/images-for-blog/What-Is-An-Air-Conditioning-Compressor.jpg",
    },
    {
      id:7,
      category: "Audio",
      name: "Audio",
      price: 42.0,
      originalPrice: 50.0,
      discount: "18% off",
      rating: 4.5,
      reviews: 72,
      image: "https://images.squarespace-cdn.com/content/v1/5a6a2d73bff200e7e9dde1f9/27f777e1-244d-409b-98c2-1f6ea77119a1/Kali-Audio-LonePine-V2-SecondWave-Studio-Monitors-Family.jpeg",
    },
    {
      id:8,
      category: "pc",
      name: "pc portable hp",
      price: 885.99,
      originalPrice: 1020.0,
      discount: "22% off",
      rating: 4.5,
      reviews: 91,
      image: "https://zoom.com.tn/61606-large_default/pc-portable-hp-15-dw3043nk-i7-1165g7-8go-1to-silver-53a18ea.jpg",
    },
    {
      id:9,
      category: "airpods",
      name: "airpods pro",
      price: 299.99,
      originalPrice: 350.0,
      discount: "35% off",
      rating: 4.5,
      reviews: 78,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfgGOqWWb6x7wV8I8N9MD1jx-dWc9OrKh8w&s",
    },
  ]);
  const addproduit=(x)=>{
    return (setproducts([x,...products]))
  }
  return (
  <div className="App">

<Routes>
  <Route path='/' element={<Home data={products} fnct={addproduit}/>}></Route>
  <Route path="/add" element={<AddProduct/>}></Route>
  <Route path="/detail/:id" element={<Details data={products} />}></Route>
</Routes>


  </div>
  )
}

export default App;

