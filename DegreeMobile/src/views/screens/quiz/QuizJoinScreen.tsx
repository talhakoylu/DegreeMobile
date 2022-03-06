import { Avatar, Box, Button, Center, Circle, FormControl, Heading, HStack, Icon, Image, Input, KeyboardAvoidingView, Pressable, Text, View, VStack } from 'native-base'
import React, { useState } from 'react'
import { Alert, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native';
import ImageLinks from '../../../../assets/ImageLinks';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const schema = yup.object({
    gameKey: yup.string().required().test("len", 'The game key must be exactly 8 characters', val => val?.length === 8),
});

const QuizJoinScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    const [waitingStatus, setWaitingStatus] = useState(false);

    const onSubmit = (data: any) => {
        return new Promise(() => {
            setTimeout(() => {
                console.log(data)
                setWaitingStatus(true)
                return new Promise(() => {
                    setTimeout(() => {
                        navigation.navigate("QuizAnswers")
                    }, 5000);
                });
            }, 2000);
        });
    }

    const exFunc = (data: any) => {
        return navigation.navigate("QuizAnswers")
    }

    return (
        <KeyboardAvoidingView flex={1}>
            <Center flex={1}>
                <Box bg={"indigo.700"} rounded={"lg"} maxWidth={300} width={"full"} minHeight={140} overflow={"hidden"}>
                    <VStack alignItems={"center"} paddingY={4} paddingX={2} space={4}>
                        <Heading color={"white"}>Join a Quiz</Heading>
                        <Box bg={"white"} width={"90%"} marginX={4} rounded={"lg"} paddingX={3} paddingY={2}>
                            <HStack space={2} alignItems={"flex-start"}>
                                {!waitingStatus && <FormControl flex={1} isInvalid={"gameKey" in errors}>
                                    <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                                        <Input
                                            variant={"unstyled"}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            fontSize={"sm"} placeholder="Enter a game key"
                                        />
                                    )}
                                        name="gameKey" />

                                    <FormControl.ErrorMessage leftIcon={<Icon as={Ionicons} name={"ios-warning"} size="xs" />}>
                                        {errors.gameKey?.message}
                                    </FormControl.ErrorMessage>
                                </FormControl>}
                                <Button minHeight={45} onPress={handleSubmit(onSubmit)} isLoading={isSubmitting} isLoadingText={waitingStatus ? "Waiting for the game to start" : "Checking"} colorScheme={"indigo"} rounded={"lg"} _text={{ bold: true }} >
                                    JOIN
                                </Button>
                            </HStack>
                        </Box>
                    </VStack>
                    <Image source={ImageLinks.quiz_join_box_wave} alt={"xx"} width={"full"} height={150} position={"absolute"} zIndex={-1} bottom={-20} />
                </Box>

                <Pressable onPress={() => navigation.navigate("Home")} position={"absolute"} top={2} right={2}>
                    <Avatar size={"sm"} bg={"gray.700"}>
                        <Icon color={"white"} as={Ionicons} name={"close"} size={"sm"} />
                    </Avatar>
                </Pressable>
            </Center >
            <Image position={"absolute"} zIndex={-1} source={ImageLinks.quiz_join_bg} alt={"xd"} resizeMode={"cover"} height={windowHeight} width={windowWidth} />

        </KeyboardAvoidingView >

    )
}

export default QuizJoinScreen;