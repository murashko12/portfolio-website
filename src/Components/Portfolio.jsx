import React from 'react';
import './Portfolio.css';

import calculator from '../assets/calculator.png'
import weatherApp from '../assets/weatherApp.png'
import passwordGenerator from '../assets/passwordGenerator.png'
import todoList from '../assets/todoList.png'
import watchShop from '../assets/watchShop.png'
import turingOfficial from '../assets/turingOfficial.png'
import searchUser from '../assets/searchUser.png'
import shoesFilter from '../assets/shoesFilter.png'
import githubSearch from '../assets/githubSearch.png'





const Portfolio = () => {
    
    const portfolioProjects = [
        {
            id: 1,
            src: calculator,
            link: "https://react-projects-flame.vercel.app/"
        },
        {
            id: 2,
            src: weatherApp,
            link: "https://weather-app-react-git-master-murashko12.vercel.app/"
        },
        {
            id: 3,
            src: passwordGenerator,
            link: "https://password-generator-murashko12.vercel.app/"   
        },   
        {
            id: 4,
            src: todoList,
            link: "https://todo-list-app-murashko12.vercel.app/"
        },
        {
            id: 5,
            src: watchShop,
            link: "https://watch-shop-pi.vercel.app/"
        },   
        {
            id: 6,
            src: turingOfficial,
            link: "https://turing-official.vercel.app/"
        },   
        {
            id: 7,
            src: searchUser,
            link: "https://turing-search-form.vercel.app/"
        },   
        {
            id: 8,
            src: shoesFilter,
            link: "https://shoes-filter-pi.vercel.app/"
        },   
        {
            id: 9,
            src: githubSearch,
            link: "https://github-search-eight-bay.vercel.app/"
        },   
    ]

    return (
        <div name="portfolio" className='Portfolio'>
            <div className='PortfolioTitle'>
                
                <div>
                    <h1>Portfolio</h1>
                    <br />
                    <h3>Check out some of my works right here</h3>
                </div>

            </div>

            <div className='PortfolioCont'>
                {
                    portfolioProjects.map(({id, src, link}) => (
                        <div key={id} className='PortfolioSection'>
                            <img src={src} alt={`${src}`} />
                    
                            <div className='PortfolioBtns'>
                                <a href={link} target="blank">
                                    <button>Demo</button>
                                </a>
                            </div>
                        </div>
                    ))
                } 
            </div>
        </div>
    );
}

export default Portfolio;
