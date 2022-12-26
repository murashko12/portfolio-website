import React, {useState} from 'react';
import './NavBar.css';
import {Link} from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

    return (
        <div className='NavBar'>
            
            <h3>Murashko Petr</h3>            

            <ul>
                {links.map(({id, link}) => (<li key={id}>
                    <Link to={link} smooth duration={500}>{link}</Link>    
                </li>))}    
            </ul>

        </div>
    );
}

export default NavBar;
