import React, { useState } from 'react'
import { Avatar, Button, Divider, Heading, HStack, Icon, Input, Pressable, ScrollView, Text, VStack, } from 'native-base';
import StandardLayout from '@views/layouts/StandardLayout';
import * as RootNavigation from '@navigations/NavigationRef';
import CustomContainer from '@components/CustomContainer';
import AntDesign from "react-native-vector-icons/AntDesign"

const UserSettingsScreen: React.FC = () => {
    return (
        <StandardLayout>
            <CustomContainer>
                <VStack flex={1} space={4} width={'100%'}>
                    <HStack justifyContent="center">
                        <Avatar bg="blueGray.500" size="2xl" source={{}} />
                    </HStack>
                    <Pressable alignItems={'center'}>
                        <HStack width={'65%'} borderWidth={'1'} borderColor={'gray.200'} rounded={'2xl'} paddingX={2} paddingY={1} backgroundColor={'gray.100'} justifyContent={'space-between'}>
                            <Text fontSize={"md"} bold>Change profile picture</Text>
                            <Icon color="black" as={AntDesign} name="camera" size="sm" />
                        </HStack>
                    </Pressable>
                    <Divider my={2} bg="gray.900" />
                    <HStack >
                        <ScrollView>
                            <Heading mx="3" size="sm" color={'blueGray.800'} paddingBottom={1}>USERNAME</Heading>
                            <Input mx="3" size="md" placeholder="Change Username" w="90%" maxWidth="300px"
                                variant="filled" width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} borderRadius={'10'}
                                backgroundColor={'gray.100'} />
                        </ScrollView>
                    </HStack>
                    <HStack >
                        <ScrollView>
                            <Heading mx="3" size="sm" color={'blueGray.800'} paddingBottom={1}>E-MAIL</Heading>
                            <Input mx="3" size="md" placeholder="xxxx@mail.com" w="90%" maxWidth="300px"  editable = {false}
                                variant="filled" width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'}
                                backgroundColor={'gray.100'} />
                        </ScrollView>
                    </HStack>
                    <HStack>
                        <ScrollView>
                            <Heading mx="3" size="sm" color={'blueGray.800'} paddingBottom={1}>PASSWORD</Heading>
                            <Pressable onPress={() => RootNavigation.navigate("ChangePassword")}>
                                <HStack mx="3" size="md" borderWidth={'1'} w="90%" maxWidth="300px" width={'full'} borderColor={'gray.200'} rounded={'md'} paddingX={3} paddingY={2.5} backgroundColor={'gray.100'} justifyContent={'space-between'}>
                                    <Text fontSize={"sm"} color={'gray.400'} >Change Password</Text>
                                    <Icon color="black" as={AntDesign} name="key" size="sm" />
                                </HStack>
                            </Pressable>
                        </ScrollView>
                    </HStack>
                    <HStack >
                        <ScrollView>
                            <Heading mx="3" size="sm" color={'blueGray.800'} paddingBottom={1}>XX</Heading>
                            <Input mx="3" size="md" placeholder="Change XX" w="90%" maxWidth="300px"
                                variant="filled" width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} borderRadius={'10'}
                                backgroundColor={'gray.100'} />
                        </ScrollView>
                    </HStack>

                    <Button mx="3" w="90%" maxWidth="300px" backgroundColor={'blueGray.800'}>Save Changes</Button>
                    <Divider my={2} bg="gray.900" />
                </VStack>
            </CustomContainer>
        </StandardLayout>
    )
}

export default UserSettingsScreen;