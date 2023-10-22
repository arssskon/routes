import { Link } from "react-router-dom";
import './Header.css'

export function Header() {
    return (
        <div className="header">
            <h1>
                <Link className="header__title" to="/" >Флеш-карточки</Link>
            </h1>
            <nav className="main-menu">
                <ul>
                    <li className="li">
                        <Link className='main-menu__link' to="/admin/set">Cоздать сет</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}