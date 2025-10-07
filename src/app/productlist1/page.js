import Productlist011 from "./product";

async function productlist() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}



export default async function list2() {
    let products = await productlist();
    console.log(products)
    return (
        <div>
            <h1>this is my 2nd product list</h1>
            {
                products.map((item) => (
                    <div><h3>Title:{item.title}</h3>
                    <Productlist011 price={item.price}/>
                    </div>
                    
                ))    
            }
        </div>
    )
}