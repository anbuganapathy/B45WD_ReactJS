import Card from "./Card";
export default function Section({productData, addToCart,removeFromCart}){
    return         <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <Card data={productData} addToCart={addToCart} removeFromCart={removeFromCart}/>
        </div>
    </div>
</section>
}