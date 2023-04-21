import React from 'react';
import wallet from '../assets/img/wallet.png';
import {  useNavigate  } from 'react-router-dom';


const SecHome = () => {
        const navigate = useNavigate();    
    return (
        <div>
        <section className="sec-home">
            <div className="home-cta">
                <div className="cta-text">
                    <span>
                        <a href="*">Jump start your portfolio</a>
                    </span>
                    <i className="bi bi-arrow-right"></i>
                </div>

                <h2 
                className="home-title h1">
                Jump start your crypto portfolio
                </h2>
                <p 
                className="home-description">
                Coinbase is the easiest place to buy and sell cryptocurrency.Sing up and get started today.
                </p>

                <div className="lead-magnet row align-items-center">
                    <div className="col input-col">
                        <input 
                        type="text" 
                        className="form-control" placeholder="Email address"/>
                    </div>

                    <div className="col">
                        <button 
                        className="btn-main" onClick={() => navigate('/login')}>
                        Get started
                        </button>
                    </div>
                </div>
            </div>

            <div className="home-img d-none d-md-block">
                <img 
                src={wallet} alt="wallet"/>
            </div>
        </section>
            
        </div>
    );
}

export default SecHome;
