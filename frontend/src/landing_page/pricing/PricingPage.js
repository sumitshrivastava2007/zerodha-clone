import React from 'react';
import openAccount from "../OpenAccount"
import Hero from './Hero';
import Brokerage from './Brokerage';

function PricingPage() {
    return ( 
        <>
        <Hero/>
        <openAccount/>
        <Brokerage/>
        </>
     );
}

export default PricingPage;