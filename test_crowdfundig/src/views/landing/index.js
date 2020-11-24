import React from 'react';
import Header from './components/header';
import BoughtCTA from './components/bought-cta';
import Stats from './components/stats';
import Graphs from './components/graphs';



const Landing = () => {
    return (  
        <>
            <Header />
            <BoughtCTA />
            <Stats />
            <Graphs />
      </>


    );
};
 
export default Landing ;