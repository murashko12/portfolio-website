import React from 'react';
import './Experience.css';

import htmlImg from "../Experience/html.svg";
import cssImg from "../Experience/css.svg";
import jsImg from "../Experience/javascript.svg";
import sassImg from "../Experience/sass.svg";
import reactImg from "../Experience/react.svg";
import githubImg from "../Experience/github.svg";
// import { dblClick } from '@testing-library/user-event/dist/click';

const Experience = () => {

  const technologies = [
    { 
      id: 1, 
      icon: htmlImg,
      title: "HTML5"
    },{  
      id: 2,
      icon: cssImg,
      title: "CSS3"
    },{  
      id: 3,
      icon: jsImg,
      title: "JS"
    },{  
      id: 4,
      icon: sassImg,
      title: "SASS"
    },{  
      id: 5,
      icon: reactImg,
      title: "ReactJS"
    },{  
      id: 6,
      icon: githubImg,
      title: "GitHub"
    }
  ]
  
  return (
    <div name="experience" className='Experience'>
      <div className='ExperienceTitle'>
        
        <div>
            <h1>Experience</h1>
            <br />
            <p>These are the technologies I've worked with</p>
        </div>

      </div>

      <div className='ExperienceCont'>
        {
          technologies.map(({id,icon,title}) => (
            <div key={id} className='ExperienceElem'>
              <span>
                <img src={icon} alt="" />
              </span>
              <h3>{title}</h3>
            </div>
          ))
        }
      </div>
    </div>
  );
}


export default Experience;