import { Center, Container } from 'native-base';
import React from 'react';

const CustomContainer: React.FC<{children: Element, props?: JSX.Element}> = ({children, ...props}) => {
    return(
        <Center {...props}>
            <Container>
                {children}
            </Container>
        </Center>
    )
}

export default CustomContainer;