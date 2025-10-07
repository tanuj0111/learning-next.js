"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login =()=>{
    const router = useRouter();
     const navigate = (page)=>{
        router.push('/login/'+page)
     }
    return(
        <div>
            <h1 className="heading">this is my login page</h1>
            <Link href="/"> go to the home page</Link>
            <br/>
            <br/> 
            <button onClick={()=>navigate("loginstudent")}>go to the student Login page</button>
            <br/>
            <br/>
            <button onClick={()=>navigate("loginteacher")}>go to the teacher Login page</button>
        </div>

    )
}
export default Login;