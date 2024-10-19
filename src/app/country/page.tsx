import Link from "next/link";

export default function Country(){
    return (
        <div style={{textAlign:"center"}}>
            <h1><b><u>COUNTRIES</u></b></h1>
            <li><Link href="/country/pakistan">PAKISTAN</Link></li>
            <li><Link href="/country/india">INDIA</Link></li>
        </div>
    )
}