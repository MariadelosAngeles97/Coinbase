import React from 'react';
import logo from '../assets/img/logo.jpeg';
import {  Link, useNavigate  } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    // const handleclick = () => navigate.push('/login')
    return (
        <nav className="nav">
            <div className='logo'>
                <Link href="/"><img src={logo} alt="logo"></img></Link>
            </div>
            <div className="menu d-none d-md-block">
                <ul className="main-menu">
                    <li><Link href="/prices">Prices</Link></li>
                    <li><Link href="/learn">Learn</Link></li>
                    <li><Link href="/individual">Individuals</Link></li>
                    <li><Link href="/bussinesses">Businesses</Link></li>
                    <li><Link href="/developer">Developer</Link></li>
                    <li><Link href="/company">Company</Link></li>
                </ul>
            </div>
            <div className="get-started">
                {/* <button className="btn-sec-s" onClick={() => navigate('/login')}>Sign in</button> */}
                <button className="btn-main-s" onClick={() => navigate('/login')}>Get started</button>

            </div>
        </nav>
    );
}

export default Nav;
