import { Box, Button, Icon, Image, Text, useMediaQuery, VStack } from 'native-base'
import React from 'react'
import CustomContainer from './CustomContainer'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import ImageLinks from '../../assets/ImageLinks'
import { StyleSheet } from 'react-native'

const JoinQuizHomeBox: React.FC = () => {
    const [isPortrait] = useMediaQuery({
        orientation: "portrait"
    });
    return (
        <CustomContainer>
            <Box width={"full"} overflow={"hidden"} flex={1} rounded={"lg"} backgroundColor={"violet.400"} height={120}>
                <VStack space={3} zIndex={1} flex={1} top={isPortrait ? 2 : 5} left={5} width={isPortrait ? "55%" : "70%"}>
                    <Text style={styles.textWithShadow} bold fontSize={"md"} color={"white"}>Join a quiz and have fun with your friends!</Text>
                    <Button shadow={1} leftIcon={<Icon as={MaterialCommunityIcons} size={"xs"} name={"rocket-launch"} />} colorScheme={"yellow"}>JOIN</Button>
                </VStack>
                <Image position={"absolute"} height={120} width={180} bottom={-15} right={-38} source={ImageLinks.quiz_icon} alt={"xd"} />
            </Box>
        </CustomContainer>
    )
}

const styles = StyleSheet.create({
    textWithShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.50)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    }
})

export default JoinQuizHomeBox;