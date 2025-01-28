import { NavLink } from 'react-router-dom';

import pagesInfo from '../../pagesInfo.json'

function Menu() {

    return (
        <nav className="menu">
            {pagesInfo.map(page => (
                <NavLink
                    className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item"}
                    key={page.to}
                    to={page.to}
                >
                    {page.title}
                </NavLink>
            ))}
        </nav>
    );
}

export default Menu