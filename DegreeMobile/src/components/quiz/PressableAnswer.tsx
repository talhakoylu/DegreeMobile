import { Avatar, HStack, IPressableProps, Pressable, Text } from 'native-base'
import React from 'react'

interface Props {
    onPress: any;
    choiceLetter: string;
    answerText: string;
    color1: string;
    color2: string;
    isDisabled?: boolean;
    [key: string]: any;
}

const PressableAnswer: React.FC<Props> = ({ onPress, choiceLetter, answerText, color1, color2, isDisabled = false, ...props }) => {
    return (
        <Pressable onPress={onPress} isDisabled={isDisabled}>
            <HStack space={4} alignItems={"center"} bg={color1} paddingY={2} paddingX={2} rounded={"md"} {...props}>
                <Avatar bg={color2} size={"sm"}>{choiceLetter}</Avatar>
                <Text noOfLines={3}>{answerText}</Text>
            </HStack>
        </Pressable>
    )
}

export default PressableAnswer