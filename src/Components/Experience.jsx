import React from 'react';
import './Experience.css';

import htmlImg from "../Experience/html.svg";
import cssImg from "../Experience/css.svg";
import jsImg from "../Experience/javascript.svg";
import sassImg from "../Experience/sass.svg";
import reactImg from "../Experience/react.svg";
import gitImg from "../Experience/git.svg";
import githubImg from "../Experience/github.svg";

const Technologies = [
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
    icon: gitImg,
    title: "Git"
  },{  
    id: 7,
    icon: githubImg,
    title: "GitHub"
  }
]

export default function Experience() {
  return (
    <div className='ExperienceCont'>

      <div className='ExperienceWrep'>

        <div className='ExperienceDescription'>
          <h1>Experience</h1>
          <br />
          <p>These are the technologies I've worked with</p>
        </div>

        <div className='Experience'>
          
            {Technologies.map(({id,icon,title}) => {
              // eslint-disable-next-line no-lone-blocks
              {return (
                <div className='ExperienceElem' key={id} >
                  <span>
                    <img src={icon} alt="" />
                  </span>
                  <h3>{title}</h3>
                </div>
              )}
            })}

        </div>
      </div>
    </div>
  )
}
