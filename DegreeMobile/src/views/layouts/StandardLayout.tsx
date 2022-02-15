import CustomContainer from '@components/CustomContainer';
import Header from '@components/partials/Header';
import { ScrollView, VStack } from 'native-base';
import React from 'react';

const StandardLayout: React.FC = ({ children }) => {
    return (
        <ScrollView>
            <VStack paddingY={4} space={5}>
                <Header />
                {children}
            </VStack>
        </ScrollView>
    );
}

export default StandardLayout;