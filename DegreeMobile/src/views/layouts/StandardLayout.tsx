import CustomContainer from '@components/CustomContainer';
import Header from '@components/partials/Header';
import { Fab, Icon, ScrollView, VStack } from 'native-base';
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign"

const StandardLayout: React.FC = ({ children }) => {
    return (
        <>
            <ScrollView bg={"light.50"}>
                <VStack paddingY={4} space={5}>
                    <Header />
                    {children}
                </VStack>
            </ScrollView>

            <Fab renderInPortal={true} shadow={2} size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} />
        </>
    );
}

export default StandardLayout;