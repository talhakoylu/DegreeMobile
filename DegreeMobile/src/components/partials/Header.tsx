import CustomContainer from '@components/CustomContainer';
import { Box, Button, Circle, HStack, Icon, IconButton, Pressable, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as RootNavigation from '@navigations/NavigationRef'

const Header: React.FC<{ [key: string]: any }> = ({ ...props }) => {
    const [isCurrentRouteHome, setIsCurrentRouteHome] = useState(true);
    const [isCurrentRouteDashboardHome, setIsCurrentRouteDashboardHome] = useState(false);

    useEffect(() => {
        if (RootNavigation.navigationRef.getCurrentRoute()?.name == "Home") {
            setIsCurrentRouteHome(true);
        } else {
            setIsCurrentRouteHome(false)
        }
    }, [isCurrentRouteHome])

    useEffect(() => {
        if (RootNavigation.navigationRef.getCurrentRoute()?.name == "DashboardHome") {
            setIsCurrentRouteDashboardHome(true);
        } else {
            setIsCurrentRouteDashboardHome(false)

        }
    }, [isCurrentRouteDashboardHome])


    return (
        <CustomContainer>
            <HStack justifyContent={"space-between"} alignItems={"center"} {...props}>
                <Box flex={1} >
                    <Text color={'gray.500'} fontSize={"xs"}>Welcome,</Text>
                    <Text fontWeight={"bold"} fontSize={"lg"}>Ahmet Talha</Text>
                </Box>
                <HStack space={2}>
                    {/* <IconButton borderRadius={"full"} borderColor={"gray.200"} colorScheme={"gray"} variant={"outline"} _icon={{
                        as: isCurrentRouteHome ? Entypo : AntDesign,
                        name: isCurrentRouteHome ? "dots-three-horizontal" : "home",
                        size: "sm",
                        color: "dark.50"
                    }} onPress={() => isCurrentRouteHome ? RootNavigation.navigate("DashboardHome") : RootNavigation.navigate("Home")}>
                    </IconButton> */}
                    {RootNavigation.isReadyAndCanGoBack() && !isCurrentRouteHome ? <IconButton borderRadius={"full"} borderColor={"gray.200"} colorScheme={"gray"} variant={"outline"} _icon={{
                        as: MaterialCommunityIcons,
                        name: "keyboard-backspace",
                        size: "sm",
                        color: "dark.50"
                    }} onPress={() => RootNavigation.goBack()}>
                    </IconButton>: null}
                    {!isCurrentRouteDashboardHome ? <IconButton borderRadius={"full"} borderColor={"gray.200"} colorScheme={"gray"} variant={"outline"} _icon={{
                        as: Entypo,
                        name: "dots-three-horizontal",
                        size: "sm",
                        color: "dark.50"
                    }} onPress={() => RootNavigation.navigate("DashboardHome")}>
                    </IconButton> : null}
                </HStack>
            </HStack>
        </CustomContainer>
    )
}

export default Header;