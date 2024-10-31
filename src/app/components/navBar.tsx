import Link from "next/link";

export default function NavBar(){
    return(
        <ul style={{display:"flex", gap:"20px", backgroundColor:"lightblue", justifyContent:"space-around", fontSize:"20px", color:"blue"}}> 
        <li><Link href="/">Home</Link></li> &nbsp; |
        <li><Link href = "/contact">Contact</Link></li>&nbsp; |
        <li><Link href = "/about">About</Link></li>&nbsp; |
        <li><Link href = "/feedback">Feedback</Link></li>&nbsp; |
        <li><Link href="/country">Country</Link></li>
    </ul>

    )
}