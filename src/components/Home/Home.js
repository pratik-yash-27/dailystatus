import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="bg">
                <img src="./assets/main2.png" className='imageOne'  />
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
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                </ul>
            </div>


        </div>
    )
}

export default Home