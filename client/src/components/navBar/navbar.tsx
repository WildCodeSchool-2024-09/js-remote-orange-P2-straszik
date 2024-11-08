import './navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <nav className="nav1">
                <ul>
                    <li><a href="#"><p><strong>Accueil</strong></p></a></li>
                    <li><a href="#"><p><strong>Boutique</strong></p></a></li>
                </ul>
            </nav>

            <div className="logo">
                <img src="assets/images/Logo_PNL.png" alt="Logo PNL" />
            </div>

            <nav className="nav2">
                <ul>
                    <li><a href="#"><strong>Concerts</strong></a></li>
                    <li><a href="#"><strong>Albums</strong></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
