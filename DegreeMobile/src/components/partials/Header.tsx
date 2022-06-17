import CustomContainer from '@components/CustomContainer';
import * as RootNavigation from '@navigations/NavigationRef';
import { Box, HStack, IconButton, Text } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../contexts/AuthContext';

const Header: React.FC<{ [key: string]: any }> = ({ ...props }) => {
    const [isCurrentRouteHome, setIsCurrentRouteHome] = useState(true);
    const [isCurrentRouteDashboardHome, setIsCurrentRouteDashboardHome] = useState(false);

    useEffect(() => {
        if (RootNavigation.navigationRef.getCurrentRoute()?.name == 'Home') {
            setIsCurrentRouteHome(true);
        } else {
            setIsCurrentRouteHome(false);
        }
    }, [isCurrentRouteHome]);

    useEffect(() => {
        if (RootNavigation.navigationRef.getCurrentRoute()?.name == 'DashboardHome') {
            setIsCurrentRouteDashboardHome(true);
        } else {
            setIsCurrentRouteDashboardHome(false);

        }
    }, [isCurrentRouteDashboardHome]);

    const authContext = useContext(AuthContext);

    return (
        <CustomContainer>
            <HStack justifyContent={'space-between'} alignItems={'center'} {...props}>
                <Box flex={1} >
                    <Text color={'gray.500'} fontSize={'xs'}>Welcome,</Text>
                    <Text fontWeight={'bold'} fontSize={'lg'}>{authContext?.authState?.user?.fullName}</Text>
                </Box>
                <HStack space={2}>
                    {!isCurrentRouteHome ? <IconButton borderRadius={'full'} borderColor={'gray.200'} colorScheme={'gray'} variant={'outline'} _icon={{
                        as: isCurrentRouteHome ? Entypo : AntDesign,
                        name: isCurrentRouteHome ? 'dots-three-horizontal' : 'home',
                        size: 'sm',
                        color: 'dark.50',
                    }} onPress={() => RootNavigation.navigate('Home')} /> : null}
                    {RootNavigation.isReadyAndCanGoBack() && !isCurrentRouteHome ? <IconButton borderRadius={'full'} borderColor={'gray.200'} colorScheme={'gray'} variant={'outline'} _icon={{
                        as: MaterialCommunityIcons,
                        name: 'keyboard-backspace',
                        size: 'sm',
                        color: 'dark.50',
                    }} onPress={() => RootNavigation.goBack()} /> : null}
                    {!isCurrentRouteDashboardHome ? <IconButton borderRadius={'full'} borderColor={'gray.200'} colorScheme={'gray'} variant={'outline'} _icon={{
                        as: Entypo,
                        name: 'dots-three-horizontal',
                        size: 'sm',
                        color: 'dark.50',
                    }} onPress={() => RootNavigation.navigate('DashboardHome')} /> : null}
                </HStack>
            </HStack>
        </CustomContainer>
    );
};

export default Header;
