import React from 'react';
import './Experience.css';

import jsImg from "../Experience/logo-javascript.svg";
import tsImg from "../Experience/typescript.svg"
import reactImg from "../Experience/react.svg";
import reduxImg from "../Experience/redux.svg";
import githubImg from "../Experience/github.svg";
import muiImg from "../Experience/material-ui-1.svg"
import viteImg from "../Experience/vitejs.svg"
import tailwindcss from '../Experience/tailwindcss.svg'
// import { dblClick } from '@testing-library/user-event/dist/click';

const Experience = () => {

  const technologies = [
    { 
      id: 1, 
      icon: jsImg,
      title: "JavaScript"
    },{  
      id: 2,
      icon: tsImg,
      title: "TypeScript"
    },{  
      id: 3,
      icon: reactImg,
      title: "ReactJS"
    },{  
      id: 4,
      icon: muiImg,
      title: "Material-Ui"
    },{  
      id: 5,
      icon: reduxImg,
      title: "Redux Toolkit"
    },{
      id: 6,
      icon: githubImg,
      title: "GitHub"
    },{
      id: 7,
      icon: viteImg,
      title: "ViteJs"
    },{
      id: 8,
      icon: tailwindcss,
      title: "TailwindCSS"
    }
  ]
  
  return (
    <div name="skills" className='Experience'>
      <div className='ExperienceTitle'>
        
        <div>
            <h1>Skills</h1>
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