import React from 'react';

const SecOnboarding = () => {
    return (
        <div>
        <section className="sec-onboarding">
            <div className="intro">
                <h3>Get started in a few minutes</h3>
                <p>Coinbase supports a variety of the most popular digital currencies</p>
            </div>
            <div className="steps">
                <div className="icon-desc">
                    <i className="bi bi-person-plus-fill icon"></i>
                    <h4 className="title">Create an account</h4>
                </div>
                <div className="step-separator"></div>
                <div className="icon-desc">
                    <i className="bi bi-bank icon"></i>
                    <h4 className="title">Link your bank account</h4>
                </div>
                <div className="step-separator"></div>
                <div className="icon-desc">
                    <i className="bi bi-coin icon"></i>
                    <h4 className="title">Purchase some coin</h4>
                </div>
            </div>
        </section>

        </div>
    );
}

export default SecOnboarding;
