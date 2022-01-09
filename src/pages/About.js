import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation/>
            <br/>
            <br/>
            <img src='./img/about.jpg' alt='About me' className='about'>
            </img>
            <h3>My name is Daniel Gabaï, and I recently graduated from ENSIMAG (a French engineering school). </h3>
            <br/>
            <br/>
            <h3> I let you discover my resume: </h3>
            <div>
                <a href='./img/portfolio.pdf' target='_blank'> Dowload CV
                </a>
            </div>


        </div>
    );
};

export default About;