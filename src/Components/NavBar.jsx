import React, {useState} from 'react';
import './NavBar.css';
import {Link} from "react-scroll";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },{
            id: 2,
            link: 'about'
        },{
            id: 3,
            link: 'portfolio'
        },{
            id: 4,
            link: 'skills'
        },{
            id: 5,
            link: 'contact'
        }
    ]

    return (
        <div className='NavBar'>
            
            <h3>Murashko Petr</h3>            

            <ul className={nav ? 'active' : 'NavBarUl'} >
                {links.map(({id, link}) => (<li key={id} >
                    <Link onClick={() => setNav(false)} to={link} smooth duration={500}>{link}</Link>    
                </li>))}    
            </ul>
            <div onClick={() => setNav(!nav)} className='mobileBtn'>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
            </div>
        </div>
    );
}

export default NavBar;
