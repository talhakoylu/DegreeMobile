import CustomContainer from '@components/CustomContainer';
import { Box, Button, Circle, HStack, Icon, IconButton, Pressable, Text } from 'native-base';
import React from 'react';
import { Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

const Header: React.FC<{ [key: string]: any }> = ({ ...props }) => {
    return (
        <CustomContainer>
            <HStack justifyContent={"space-between"} alignItems={"center"} {...props}>
                <Box flex={1} >
                    <Text color={'gray.500'} fontSize={"xs"}>Welcome,</Text>
                    <Text fontWeight={"bold"} fontSize={"lg"}>Ahmet Talha</Text>
                </Box>
                <IconButton borderRadius={"full"} borderColor={"gray.200"} colorScheme={"gray"} variant={"outline"} _icon={{
                    as: Entypo,
                    name: "dots-three-horizontal",
                    size: "sm",
                    color: "dark.50"
                }} onPress={() => Alert.alert("hello")}>
                </IconButton>
            </HStack>
        </CustomContainer>
    )
}

export default Header;