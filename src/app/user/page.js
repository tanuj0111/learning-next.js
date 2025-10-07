 "use client" 
import { useState } from "react"

 export default function page(){
    const [h3style,seth3style]=useState({backgroundColor:'green'})
    return(
        <div>
            <h1>this is my user page of user</h1>
            <h2>this is the sigma</h2>
            <h3 style={h3style}>heading 3 for user</h3>
            <button onClick={()=>seth3style({backgroundColor:'red'})}>update style</button>
        </div>
    )
}