import { Container, Divider, Heading, HStack, Link, ScrollView, Text, View, VStack } from 'native-base'
import React from 'react'

interface Props{
    title: string;
    description: string;
    footerRoutPathName: string;
    navigation: any;
}

const RegistrationLayout: React.FC<Props> = ({title, description, footerRoutPathName, navigation, children}) => {
    return(
        <View flex={1} bg={"info.50"} paddingBottom={4}>
            <ScrollView contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
            }}>
                <Container width={"full"}>
                    <VStack space={6} width={"full"}>
                        <VStack alignItems={"center"} space={4} paddingTop={6}>
                            <Heading size={"lg"} color={"black"}>
                                {title}
                            </Heading>
                            <Text textAlign={"center"} color={"gray.500"}>{description}</Text>
                        </VStack>
                        
                        {children}

                        <HStack space={4} alignItems={"center"}>
                            <Divider bg={"gray.400"} flex={1} />
                            <Text color={"gray.600"}> OR </Text>
                            <Divider bg={"gray.400"} flex={1} />
                        </HStack>

                        <HStack space={1} justifyContent={"center"} shadow={"3"}>
                            <Text color={"gray.500"} shadow={"3"}>
                                {footerRoutPathName === "Register" ? "If you are not a member,": "Are you a member?"}
                            </Text>
                            <Link _text={{
                                color: "darkBlue.400"
                            }} isUnderlined={false} onPress={() => navigation.navigate(footerRoutPathName)}>{footerRoutPathName === "Register" ? "register" : "Sign in" } now!</Link>
                        </HStack>
                    </VStack>
                </Container>
            </ScrollView>
        </View >
    )
}

export default RegistrationLayout;