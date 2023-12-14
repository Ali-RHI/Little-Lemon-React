import logo from "./content/Logo.svg"

export default function Nav(){
    return(
        <nav>
            <ul>
                <li><img src={logo} /></li>
                <li>Home</li>
                <li>Menu</li>
                <li>Reservation</li>
                <li>About</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}