"use client"
export default function Productlist011({price}) {
    console.log(price)
    return(
        <div>
            <button onClick={()=>alert(price)}>check price </button>
        </div>

    )
} 