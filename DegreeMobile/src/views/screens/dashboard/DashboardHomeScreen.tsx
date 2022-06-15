import CustomContainer from '@components/CustomContainer';
import * as RootNavigation from '@navigations/NavigationRef';
import StandardLayout from '@views/layouts/StandardLayout';
import { Button, HStack, Icon, Pressable, Text, VStack } from 'native-base';
import React, { useContext } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AuthContext } from '../../../contexts/AuthContext';

const DashboardHomeScreen: React.FC = ({ ...props }) => {
    const authContext = useContext(AuthContext);

    return (
        <StandardLayout>
            <CustomContainer>
                <VStack flex={1} space={3} width={'100%'}>
                    <Pressable onPress={() => RootNavigation.navigate('LastSolvedQuizes')}>
                        <HStack width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} paddingX={4} paddingY={3} backgroundColor={'gray.100'} justifyContent={'space-between'}>
                            <Text fontSize={'md'} bold>Last Solved Quizes</Text>
                            <Icon color="black" as={AntDesign} name="folderopen" size="sm" />
                        </HStack>
                    </Pressable>
                    <Pressable onPress={() => RootNavigation.navigate('ChangePassword')}>
                        <HStack width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} paddingX={4} paddingY={3} backgroundColor={'gray.100'} justifyContent={'space-between'}>
                            <Text fontSize={'md'} bold>Change Password</Text>
                            <Icon color="black" as={AntDesign} name="key" size="sm" />
                        </HStack>
                    </Pressable>
                    <Pressable onPress={() => RootNavigation.navigate('UserSettings')}>
                        <HStack width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} paddingX={4} paddingY={3} backgroundColor={'gray.100'} justifyContent={'space-between'}>
                            <Text fontSize={'md'} bold>User Settings</Text>
                            <Icon color="black" as={AntDesign} name="user" size="sm" />
                        </HStack>
                    </Pressable>
                    <Pressable onPress={() => RootNavigation.navigate('DashboardSettings')}>
                        <HStack width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} paddingX={4} paddingY={3} backgroundColor={'gray.100'} justifyContent={'space-between'}>
                            <Text fontSize={'md'} bold>Dashboard Settings</Text>
                            <Icon color="black" as={AntDesign} name="setting" size="sm" />
                        </HStack>
                    </Pressable>

                        <Button backgroundColor={'red.600'} onPress={() => {
                            authContext.logout();
                        }}>Log Out</Button>

                </VStack>
            </CustomContainer>
        </StandardLayout>
    );
};



export default DashboardHomeScreen;
