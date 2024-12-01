import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <ul style={{display:"flex", gap:"6px"}}>
            <li>
                <Link href={{ pathname:"/" , query:{
                    q:"hola"
                }}}>Home</Link>
            </li>

            <li>
                <Link href={{ pathname:"/about" }}>About</Link>
            </li>

            <li>
                <Link href={{ pathname:"/profile" }}>Profile</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
