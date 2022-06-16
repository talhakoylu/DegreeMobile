import { Alert, Box, Center, HStack, Text, VStack } from 'native-base';
import React from 'react';

interface Props {
    title: string;
    description?: string;
    status: string;
}

const CustomAlert: React.FC<Props> = ({ title, description, status }) => {
    return (
        <Center>
            <Alert width={'100%'}  status={status}>
                <VStack space={2} flexShrink={1} w="100%">
                    <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                        <HStack flexShrink={1} space={2} alignItems="center">
                            <Alert.Icon />
                            <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                                {title}
                            </Text>
                        </HStack>
                    </HStack>
                    {description && <Box pl="6" _text={{
                        color: 'coolGray.600',
                    }}>
                        {description}
                    </Box>}
                </VStack>
            </Alert>
        </Center>
    );
};

export default CustomAlert;
