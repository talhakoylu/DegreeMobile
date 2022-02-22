import { Box, Image, Pressable, Text, View } from 'native-base';
import React from 'react'
import * as RootNavigation from '@navigations/NavigationRef';

interface Props {
    imageUri: string;
    heading: string;
    quizId: number;
    [key: string]: any;
}

const SliderItem: React.FC<Props> = ({ imageUri, heading, quizId, ...props }) => {
    return (
        <Pressable onPress={() => RootNavigation.navigate("QuizPostDetail", {quizId: quizId})}>
            <Box borderRadius={"md"} height={150} overflow={"hidden"} {...props}>
                <Image source={{ uri: imageUri }} alt={heading} size={"2xl"} resizeMode={"cover"} />

                <Box position={"absolute"} height={"full"} width={"full"} _text={{
                    noOfLines: 2,
                    color: "white",
                    fontSize: "sm",
                    bold: true,
                    flex: 1,
                    bottom: 4,
                    left: 5,
                    right: 5,
                    position: "absolute"
                }} bg={{
                    linearGradient: {
                        colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.05)", "rgba(0,0,0,0.3)", "rgba(0,0,0,0.6)", "dark.50"],
                        start: [0, 0],
                        end: [0, 1],
                    },
                }}>
                    {heading}
                </Box>
            </Box>
        </Pressable>
    )
}


export default SliderItem;