import { Center, Container } from 'native-base';
import React from 'react';

const CustomContainer: React.FC<{children: Element, [key:string]: any}> = ({children, ...props}) => {
    return(
        <Center {...props}>
            <Container flex={1} width={"100%"}>
                {children}
            </Container>
        </Center>
    )
}

export default CustomContainer;