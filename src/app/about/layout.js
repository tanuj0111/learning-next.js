"use client"
import Link from "next/link";
import "./about.css";
export default function AboutLayout({ children }) {

    return (
        <div>
            <ul className="about-menu">
                <li><h4></h4>ABOUT NAVBAR</li>
                <li><Link href="/about">about main</Link></li>
                <li><Link href="/about/aboutcollage">about collage</Link></li>
                <li><Link href="/about/aboutstudent">about student</Link></li>
            </ul>
            {children}
        </div>
    )
}