"use client"
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname();
    console.log(pathName);

    return (
        <div>
            {
                pathName !== "/login/loginteacher" ?
                    <ul className="login-menu">
                        <li><h4>LOGIN NAVBAR</h4></li>
                        <li><Link href="/login">Login main</Link> </li>

                        <li><Link href="/login/loginstudent">student Login  </Link> </li>

                        <li><Link href="/login/loginteacher">Teacher login</Link> </li>
                    </ul> :
                    <Link href="/login">back to the main page</Link>

            }

            {children}
        </div>

    )
} 