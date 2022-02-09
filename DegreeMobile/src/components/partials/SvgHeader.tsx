import CustomContainer from '@components/CustomContainer';
import { Center, Container } from 'native-base';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgHeader: React.FC = () => {
    return (
        <Center backgroundColor={"indigo.600"} height={120}>
            <Container>
                xd
            </Container>
            <Svg
                height="100%"
                width="100%"
                viewBox="0 0 1440 210"
                style={{ position: "absolute" }}
            >
                <Path
                    fill="#fff"
                    d="M0,288L48,293.3C96,299,192,309,288,309.3C384,309,480,299,
             576,282.7C672,267,768,245,864,224C960,203,1056,181,1152,192C1248,
             203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,
             320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,
             320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </Svg>
        </Center>

    )
}

export default SvgHeader;