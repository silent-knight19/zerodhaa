import React from 'react';
import Hero from './Hero';
import Rewards from './Rewards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccounts from '../OpenAccounts';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
    
        <Hero/>
       <Rewards/>
        <Stats/>
          <Pricing/>
          <Education/>
           <OpenAccounts/>
        


        </>
     );
}

export default HomePage;