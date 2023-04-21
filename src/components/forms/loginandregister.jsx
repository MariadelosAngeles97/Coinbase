import React from 'react';
import {  useState  } from 'react';

const Loginandregister = () => {
    const [swapPanel, setSwapPanel] = useState(false);

    const signUpButton = () => {
    setSwapPanel(true);
    };
    const signInButton = () => {
    setSwapPanel(false);
    };

    return (
        <div className='formulario'>
            <div className={['container-form',swapPanel ? "right-panel-active" : null]
            .filter(Boolean)
            .join(" ")} id='main'>
                <div className='sign-up'>
                    <form action='/login' method=''>
                        <h1 className='titleform'>Create Account</h1>
                        <div className='social-container'>
                            <a href='*' className='social'><i className='bi bi-facebook'></i></a>
                            <a href='*' className='social'><i className='bi bi-google'></i></a>
                            <a href='*' className='social'><i className='bi bi-linkedin'></i></a>
                        </div>
                        <p className='parr'>or use your email registration</p>
                        <input className='inputlog' type='text' name='txt' placeholder='Name' required/>
                        <input className='inputlog' type='email' name='email' placeholder='Email' required/>
                        <input className='inputlog' type='password' name='pswd' placeholder='Password' required/>
                        <button className='logandreg' onClick={signUpButton}>Sign Up</button>
                    </form>
                </div>

                <div className='sign-in'>
                    <form action='/login'>
                        <h1 className='titleform'>Sign in</h1>
                        <div className='social-container'>
                            <a href='*' className='social'><i className='bi bi-facebook'></i></a>
                            <a href='*' className='social'><i className='bi bi-google'></i></a>
                            <a href='*' className='social'><i className='bi bi-linkedin'></i></a>
                        </div>
                        <p className='parr'>or use your account</p>
                        <input className='inputlog' type='email' name='email' placeholder='Email' required/>
                        <input className='inputlog' type='password' name='pswd' placeholder='Password' required/>
                        <a className='social' href='*'>Forget your Password?</a>
                        <button className='logandreg' onClick={signInButton}>Sign In</button>
                    </form>
                </div>
                <div className='overlay-container'>
                    <div className='overlay'>
                        <div className='overlay-left'>
                        <h1 className='titleform'>Sign in</h1>
                            <h1 >Welcome Back!</h1>
                            <p>Too keep connected with us please login with your personal info</p>
                            <button className='logandreg' id='signIn' onClick={signInButton}>Sign In</button>
                        </div>
                        <div className='overlay-right'>
                            <h1 className='titleform'>Hello, Friend!</h1>
                            <p className='parr'>Enter your personal details and start journey with us</p>
                            <button className='logandreg' id='signUp' onClick={signUpButton}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loginandregister;
