import React from 'react';
import Nav from '../Nav';
import SecHome from '../SecHome';
import SecFeatures from '../SecFeatures';
import SecBenefits from '../SecBenefits';
import SecKpi from '../SecKpi';
import SecOnboarding from '../SecOnboarding';
import SecFooter from '../SecFooter';


const Coinbase = () => {
    return (
        <div className='coinbase'>
            <Nav></Nav>
            <SecHome></SecHome>
            <SecFeatures></SecFeatures>
            <SecBenefits></SecBenefits>
            <SecKpi></SecKpi>
            <SecOnboarding></SecOnboarding>
            <SecFooter></SecFooter>               
        </div>
    );
}

export default Coinbase;
