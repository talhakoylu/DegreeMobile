import React, { useState } from 'react'
import { Button, Divider, Heading, HStack, Icon, Input, ScrollView, Text, View, VStack } from 'native-base';
import StandardLayout from '@views/layouts/StandardLayout';
import CustomContainer from '@components/CustomContainer';


const ChangePasswordScreen: React.FC = () => {

    return (
        <StandardLayout>
            <CustomContainer>
                <VStack flex={1} space={4} width={'100%'}>
                    <HStack justifyContent={"center"}>
                        <Heading size="xl" color={'blueGray.800'}> Change Your Password </Heading>
                    </HStack>
                    <Divider my={2} bg="gray.900" />
                    <HStack >
                    <ScrollView>
                            <Heading mx="3" size="sm" color={'blueGray.800'} paddingBottom={1}>Password</Heading>
                            <Input mx="3" size="md" placeholder="Please Enter Your Current Password..." w="90%" maxWidth="300px"
                                variant="filled" width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} borderRadius={'10'}
                                backgroundColor={'gray.100'} />
                        </ScrollView>
                    </HStack>
                    <HStack >
                    <ScrollView>
                            <Heading mx="3" size="sm" color={'blueGray.800'} paddingBottom={1}>New Password</Heading>
                            <Input mx="3" size="md" placeholder="Please Enter Your New Password..." w="90%" maxWidth="300px"
                                variant="filled" width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} borderRadius={'10'}
                                backgroundColor={'gray.100'} />
                        </ScrollView>
                    </HStack>
                    <HStack >
                    <ScrollView>
                            <Heading mx="3" size="sm" color={'blueGray.800'} paddingBottom={1}>Confirm New Password</Heading>
                            <Input mx="3" size="md" placeholder="Please Confirm Your New Password..." w="90%" maxWidth="300px"
                                variant="filled" width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} borderRadius={'10'}
                                backgroundColor={'gray.100'} />
                        </ScrollView>
                    </HStack>

                    <Button mx="3" w="90%" maxWidth="300px" backgroundColor={'blueGray.800'}>Confirm</Button>
                    <Divider my={2} bg="gray.900" />
                </VStack>
            </CustomContainer>
        </StandardLayout>
    )
}

export default ChangePasswordScreen;