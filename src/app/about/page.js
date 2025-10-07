"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
const About =()=>{
     const router = useRouter();
     const navigate = (page2)=>{
        router.push('/about/'+page2)
     }
    return(
        <div>

        <h1 className="heading1">this is my about page </h1>
        <Link href="/"> go to the home page</Link>
        <br/>
        <br/>
        <button onClick={()=>router.push("/")}>Go to home page</button>

        <br/>
        <br/>
        <Link href="/about/aboutcollage">go to About Collage page </Link>
        <br/>
        <br/>
        <br/>
        <Link href="/about/aboutstudent">go to About Student  page </Link>
         </div>
    )
}
export default About;