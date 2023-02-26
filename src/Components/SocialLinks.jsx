import {React, useState} from 'react'
import './SocialLinks.css'
import { FaTelegramPlane,FaGithub } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import {AiOutlinePlus} from 'react-icons/ai';
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
    

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='SocialLinks'>
            <ul>
                {links.map(({id,child,href}) => {
                    return(
                        <li key={id}>
                            <a href={href} target="_blank" rel="noreferrer">
                                {child}
                            </a>
                        </li>
                    )}     
                )}

        </ul>

        <div className={`fab ${isOpen ? "open" : ""}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <>
                    <AiOutlinePlus size={30} />
                </>
            </button>

            <div className="menu">

                <button>
                    <a href="https://github.com/murashko12" target="_blank" rel="noreferrer">
                        <> <FaGithub size={30} /></>
                    </a>
                    {/* <span>GitHub</span> */}
                </button>
                <button>
                    <a href="https://t.me/Peter_Muraschko" target="_blank" rel="noreferrer">
                        <><FaTelegramPlane size={30} /></>
                    </a>
                    {/* <span>GitHub</span> */}
                </button>
                <button>
                    <a href="https://vk.com/id222310051" target="_blank" rel="noreferrer">
                        <> <SlSocialVkontakte size={30} /></>
                    </a>
        
                    {/* <span>GitHub</span> */}
                </button>
                <button>
                    <a href="mailto:petr@ocumare.ru" target="_blank" rel="noreferrer">
                        <> <GoMail size={30} /></>
                    </a>
                    
                    {/* <span>GitHub</span> */}
                </button>
                
            </div>
        </div>

    </div>
  )
}

export default SocialLinks