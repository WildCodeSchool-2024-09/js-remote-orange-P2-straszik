import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <nav className="nav1">
                <ul>
                    <li><Link to="/"><p><strong>Accueil</strong></p></Link></li>
                    <li><Link to="#"><p><strong>Boutique</strong></p></Link></li>
                </ul>
            </nav>

            <div className="logo">
                <img src="assets/images/Logo_PNL.png" alt="Logo PNL" />
            </div>

            <nav className="nav2">
                <ul>
                    <li><Link to="#"><strong>Concerts</strong></Link></li>
                    <li><Link to="/Albums"><strong>Albums</strong></Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
