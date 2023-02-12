import React from 'react';
import './Home.css'
import myPhoto from '../assets/myPhoto.jpg'


const Home = () => {
    return (
        <div name="home" className='Home'>
            <div className='homeWreper'>
                <div className='photoAndTitle'>
                    <h1>
                        I'm Frontend Developer
                    </h1>
                    <br />
                    <p>
                        I have 1 year of experiens building and desgining software.
                        Currently, I love work with interfaces using ReactJS.
                    </p>
                </div>
                <div className='photoWreper'>
                    <img src={myPhoto} alt="myPhoto" />
                </div>
            </div>
        </div>
    );
}

export default Home;
