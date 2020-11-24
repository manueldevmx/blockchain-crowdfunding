import React, { useState } from 'react';
import api from '../../../api';
import { Heading,
        Box,
        Button,
        InputGroup,
        Input,
        InputRightAddon,
        NumberInput,
        NumberInputField,
        NumberInputStepper,
        NumberIncrementStepper,
        NumberDecrementStepper,
        Icon,
        InputLeftElement,
        useToast
      } from "@chakra-ui/react"


const BoughtCTA = () => {
    const toast = useToast();
    const [toBuy, setToBuy ] = useState(100);
    const [address, setAddress ] = useState('');



    const handleSubmit = async (event) => {
        event.prevent();
        
        //Validar que la direccion mida 56 caracteres
        if (address.lenght !== 56) {
            toast({
                title: "Cuenta invalida",
                description: "Asegurate de que tu cuenta sea correcto",
                status: "warning",
                duration: 9000,
                isClosable: true,
              });
            return;
        }

        try {
           await  api.loadAccount(address);
        } catch (err ){
            toast({
                title: "Cuenta invalida",
                description: "Esta cuenta no es activa",
                status: "warning",
                duration: 9000,
                isClosable: true,
              });
              return;
        }

        //Abrir modal de confirmacion


    };

    return ( 
        <>
           <Heading 
           mt={17}
           textAlign="center"
           as="h1"
           size="2xl">
              
              ¡Juntos llegamos a la meta!
           </Heading>
           <Heading 
           size="xl"
           textAlign="center"
           as="h2">
               Compra IPTS
           </Heading>

           <Box
           onSubmit={handleSubmit}
           as="form"
           mx="auto" 
           maxWidth={500}
           px={10}
           
           >
               <InputGroup mt={10}>
               <NumberInput 
               width="100%" 
               defaultValue={100} 
               >
                <NumberInputField
                onChange={({ target: value })=> setToBuy(value) }
                
                
                />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
                </NumberInput>


                <InputRightAddon>IPTS</InputRightAddon>

               </InputGroup>


               <InputGroup
               mt={3}>

                   <InputLeftElement 
                     children={<Icon name="unlock" color="gray.300" />} />
                   <Input onChange={({ target: value }) => setAddress(value) }  placeholder="Tu direccion cripto" />
               </InputGroup>


               <Button 
               width="100%"
               colorScheme="teal"
                variant="solid"
                mt={3}
               
               >
                   Comprar
               </Button>
           </Box>
        </>
     );
};
 
export default BoughtCTA ;