import React from 'react';
import { Stat, StatGroup, StatLabel, StatNumber } from '@chakra-ui/react';

const Stats = () => {
    return ( 
       <StatGroup >
          <Stat  textAlign="center">
            <StatLabel>
               Cuentas con IPTS
            </StatLabel>
            <StatNumber>
               100
            </StatNumber>
          </Stat>

          <Stat  textAlign="center">
            <StatLabel>
               IPTS en circulacion
            </StatLabel>
            <StatNumber>
               10,000
            </StatNumber>
          </Stat>

          <Stat>
            <StatLabel>
               % de la meta
            </StatLabel>
            <StatNumber>   
               39%
            </StatNumber>
          </Stat>
       </StatGroup>
     );
};
 
export default Stats ;