import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import data from "./data.json";
import { useState } from "react";
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [productData, setProductData] = useState(data);
  let addToCart = (id) => {
    setCartCount(cartCount + 1);
    let index = productData.findIndex((obj) => obj.productID === id);
    let tempData = productData;
    tempData[index].isVisible = false;
    setProductData([...tempData]);
  };
  let removeFromCart = (id) => {
    if (cartCount > 0) setCartCount(cartCount - 1);
    let index = productData.findIndex((obj) => obj.productID === id);
    let tempData = productData;
    tempData[index].isVisible = true;
    setProductData([...tempData]);
  };
  return (
    <div className="App">
      {/* <!-- Navigation--> */}
      <Navbar cartCount={cartCount} />
      {/* <!-- Header--> */}
      <Header />
      {/* <!-- Section--> */}
      <Section
        productData={data}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      {/* <!-- Footer--> */}
      <Footer />
    </div>
  );
}

export default App;
