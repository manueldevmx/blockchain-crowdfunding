import React from 'react';
import {Image, Box,  } from '@chakra-ui/react';

const Header = () => {
    return ( 
        <>
           <Box>
               <Image 
               src="./images/header.png" 
               height={190} width="100%" 
               objectFit="cover" 
               alt="Blockchain_test_Crowdfunding">
               </Image>
           </Box>
        </>
     );
};
 
export default Header ;