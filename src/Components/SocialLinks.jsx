import React from 'react'
import './SocialLinks.css'
import { FaTelegramPlane,FaGithub } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { GoMail } from "react-icons/go";

const SocialLinks = () => {

    
    const links = [
        {
            id: 1,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/murashko12",
        },
        {
            id: 2,
            child: (
                <>
                    Telegram <FaTelegramPlane size={30} />
                </>
            ),
            href: "https://t.me/Peter_Muraschko",
        },
        {
            id: 3,
            child: (
                <>
                    VK <SlSocialVkontakte size={30} />
                </>
            ),
            href: "https://vk.com/id222310051",
        },
        {
            id: 4,
            child: (
                <>
                    Mail <GoMail size={30} />
                </>
            ),
            href: "mailto:petr@ocumare.ru",
        }
    ]
    


  return (
    <div className='SocialLinks'>
        <ul>

            {links.map(({id,child,href}) => {return(
                    <li key={id}>
                        <a href={href} target="_blank" rel="noreferrer">
                            {child}
                        </a>
                    </li>
                )}     
            )}

        </ul>
    </div>
  )
}

export default SocialLinks