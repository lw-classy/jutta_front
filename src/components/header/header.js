import React, { Fragment, useState } from 'react';
import Menu from './menu';

export default function Header(){

    const [menu, setMenu] = useState({menuOpen: false});

    const handleMenu = () => {
        setMenu(menu.menuOpen?  {menuOpen: false}: {menuOpen: true});
    }

    return(
        <Fragment>
        <header>
            <div className="container-fluid header-wrapper">
            <div className="d-flex justify-content-between header-wrapper">
                <div className="col-2 col-md-2 col-lg-1 logo"></div>
                <div className="menu">
                    <div className = {`menu__burger ${menu.menuOpen}`} onClick={handleMenu}>
                        <span className="menu__burger__line line__1"></span>
                        <span className="menu__burger__line line__2"></span>
                    </div>
                </div>
            </div>
            </div>
        </header>

        <Menu menu={menu}></Menu>
        </Fragment>

       
    )
}