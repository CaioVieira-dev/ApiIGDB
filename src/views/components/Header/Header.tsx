import { Link } from 'react-router-dom';
function Header() {

    return (
        <header>
            <h1><Link to="/">IGDB API</Link></h1>
            <nav>
                <ul>
                    <li>Favoritos</li>
                    <li><Link to="/login" >Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;