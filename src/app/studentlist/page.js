import Link from "next/link";
export default function Studentslist(){
    return(
        <div>
            <h1>Students List page</h1>
        <ul>
            <li><Link href="studentlist/anil">Anil</Link></li>
            <li><Link href="studentlist/peter">Peter</Link></li>
            <li><Link href="studentlist/sam">Sam</Link></li>
            <li><Link href="studentlist/bhasker">Bhasker</Link></li>
             
        </ul>
        </div>
    )
}