"use client"
import Script from "next/script";

export default function page() {
    return (
        <div>
            <Script
            src="/location.js"
            onLoad={()=>{
                console.log("file loaded")
            }}
            />
            <h1>get user het location</h1>
        </div>
    )
}