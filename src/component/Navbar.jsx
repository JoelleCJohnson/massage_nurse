import { useState } from "react"

export default function Navbar() {

    const [navPage, setNavPage] = useState()

    return (
        <>
        <nav>
            
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
                <li>
                    <a href="">Gallery</a>
                </li>
                <li>
                    <a href="">Reviews</a>
                </li>
                <li>
                    <a href="">Contact Me</a>
                </li>
            </ul>
        </nav>
        </>
    )
}