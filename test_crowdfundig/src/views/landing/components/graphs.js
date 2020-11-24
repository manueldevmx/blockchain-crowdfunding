import React from 'react';
import {Box} from '@chakra-ui/react';

const Graphs = () => {

    const onLoad = ( ) => {
        var c=this;window.addEventListener('message',function({data,source}){if(c&&source===c.contentWindow&&data.widget===c.src)c.style.height=data.height+'px'},false);
    };

    return ( 
        <Box display="flex">
        
            <Box 
            as="iframe"
            onLoad={onLoad}
            
            src="https://stellar.expert/widget/testnet/tx/info/d8370106669c57b4f886f220c02ee4aaa18b9632a110445dce2e98df085c795e"            
            border="none"
            overflow="hidden"
            height={600}
            px={13}
            maxWidth={700}
            width="100%"
            mx="auto"
            ></Box>

<Box 
            as="iframe"
            onLoad={onLoad}
            
            src="https://stellar.expert/widget/testnet/network-activity/accounts"           
            border="none"
            overflow="hidden"
            height={600}
            px={13}
            maxWidth={700}
            width="100%"
            mx="auto"
            ></Box>
        </Box>
     );
};
 
export default Graphs ;