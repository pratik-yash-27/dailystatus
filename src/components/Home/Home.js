import React from 'react'
import Header from '../Header/Header'

const Home = () => {
    return (
        <div className='container'>
            {/* <Header/> */}
            <div className="bg">
                <img src="./assets/main2.png" className='imageOne' alt='' />
            </div>
            <div className="content">
                <h1>Ketan</h1>
                <h3>Front-end web developer</h3>
                <p>I am a front-end web developer.
                    I can provide clean code and pixel <br />
                    perfect design. I also make the website more & more interactive <br />
                    with web animations Every website should be built with two <br />primary goals.</p>
                <button type="button">Hire Me</button>
            </div>
            <div className="social">
                <ul>
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-dribbble"></i></li>
                </ul>
            </div>


        </div>
    )
}

export default Home