import React, { useState } from 'react'
import { Box, Button, Fab, Icon, Popover, ScrollView, Text, View, FlatList, HStack, VStack, Pressable, } from 'native-base';
import StandardLayout from '@views/layouts/StandardLayout';
import * as RootNavigation from '@navigations/NavigationRef';
import AntDesign from "react-native-vector-icons/AntDesign"
import CustomContainer from '@components/CustomContainer';


const DashboardHomeScreen: React.FC = ({ ...props }) => {



    return (
        <StandardLayout>
            <CustomContainer>
                <VStack flex={1} space={3} width={'100%'}>
                    <Pressable onPress={() => RootNavigation.navigate("LastSolvedQuizes")}>
                        <HStack width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} paddingX={4} paddingY={3} backgroundColor={'gray.100'} justifyContent={'space-between'}>
                            <Text fontSize={"md"} bold>Last Solved Quizes</Text>
                            <Icon color="black" as={AntDesign} name="folderopen" size="sm" />
                        </HStack>
                    </Pressable>
                    <Pressable onPress={() => RootNavigation.navigate("ChangePassword")}>
                        <HStack width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} paddingX={4} paddingY={3} backgroundColor={'gray.100'} justifyContent={'space-between'}>
                            <Text fontSize={"md"} bold>Change Password</Text>
                            <Icon color="black" as={AntDesign} name="key" size="sm" />
                        </HStack>
                    </Pressable>
                    <Pressable onPress={() => RootNavigation.navigate("UserSettings")}>
                        <HStack width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} paddingX={4} paddingY={3} backgroundColor={'gray.100'} justifyContent={'space-between'}>
                            <Text fontSize={"md"} bold>User Settings</Text>
                            <Icon color="black" as={AntDesign} name="user" size="sm" />
                        </HStack>
                    </Pressable>
                    <Pressable onPress={() => RootNavigation.navigate("DashboardSettings")}>
                        <HStack width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} paddingX={4} paddingY={3} backgroundColor={'gray.100'} justifyContent={'space-between'}>
                            <Text fontSize={"md"} bold>Dashboard Settings</Text>
                            <Icon color="black" as={AntDesign} name="setting" size="sm" />
                        </HStack>
                    </Pressable>

                        <Button backgroundColor={'red.600'}>Log Out</Button>

                </VStack>
            </CustomContainer>
        </StandardLayout>
    )
}



export default DashboardHomeScreen