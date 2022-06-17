import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Box, Button, Center, FormControl, Heading, HStack, Icon, Image, Input, KeyboardAvoidingView, Pressable, ScrollView, Text, VStack } from 'native-base';
import React, { useContext, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import ImageLinks from '../../../../assets/ImageLinks';
import { AxiosContext } from '../../../contexts/AxiosContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const schema = yup.object({
    gameKey: yup.string().required().test('len', 'The game key must be exactly 8 characters', val => val?.length === 8),
});

const QuizJoinScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
    });
    const { authAxios } = useContext(AxiosContext);

    const findGameMutation = useMutation(async (data) => await authAxios.get('/game/find-game-with-key/' + data));
    const joinMutation = useMutation(async (data) => await authAxios.post('/game/join-game/' + data.quizId + '/' + data.gameId));

    const onSubmitJoin = async (data) => {
        await joinMutation.mutateAsync({ quizId: data.quizId, gameId: data._id });
    };

    useEffect(() => {
        if (joinMutation.isSuccess) {
            const data = joinMutation.data.data.data;
            navigation.navigate('QuizAnswers', {
                quizId: data.gameResult.quizId,
                gameId: data.gameResult.gameId,
                resultId: data.gameResult._id,
            });
        }
    }, [joinMutation.isSuccess]);

    const onSubmit = async (data: any) => {
        const upperCaseGameKey = data.gameKey.toUpperCase();
        await findGameMutation.mutateAsync(upperCaseGameKey);
    };

    return (
        <KeyboardAvoidingView flex={1}>
            <Center flex={1}>
                <VStack space={1} width={'full'} alignItems={'center'}>
                    <Box bg={'indigo.700'} rounded={'lg'} maxWidth={'80%'} width={'full'} minHeight={140} overflow={'hidden'}>
                        <VStack alignItems={'center'} paddingY={4} paddingX={2} space={4}>
                            <Heading color={'white'}>Join a Quiz</Heading>
                            <Box bg={'white'} width={'90%'} marginX={4} rounded={'lg'} paddingX={3} paddingY={2}>
                                <HStack space={2} alignItems={'flex-start'}>
                                    <FormControl flex={1} isInvalid={'gameKey' in errors}>
                                        <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                                            <Input
                                                variant={'unstyled'}
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                                fontSize={'sm'} placeholder="Enter a game key"
                                            />
                                        )}
                                            name="gameKey" />

                                        <FormControl.ErrorMessage leftIcon={<Icon as={Ionicons} name={'ios-warning'} size="xs" />}>
                                            {errors.gameKey?.message}
                                        </FormControl.ErrorMessage>
                                    </FormControl>
                                    <Button minHeight={45} onPress={handleSubmit(onSubmit)} isLoading={findGameMutation.isLoading} isLoadingText={'Finding the Game'} colorScheme={'indigo'} rounded={'lg'} _text={{ bold: true }} >
                                        Find
                                    </Button>
                                </HStack>
                            </Box>
                        </VStack>
                        <Image source={ImageLinks.quiz_join_box_wave} alt={'xx'} width={'full'} height={150} position={'absolute'} zIndex={-1} bottom={-20} />
                    </Box>

                    {findGameMutation.isSuccess && <ScrollView maxH={300} maxWidth={'80%'} width={'full'} overflow={'hidden'}>
                        <Box bg={'indigo.400'} py={2} px={4} rounded={'lg'}>
                            <Heading textAlign={'center'} color={'white'}>Search Results</Heading>
                            <VStack space={2}>
                                {findGameMutation?.data?.data?.data?.map((item, index) => {
                                    const isQuizAccessibleForLast = new Date(item.gameEnd).getTime() > new Date().getTime();
                                    const isQuizAccessibleForBegin = new Date(item.gameStart).getTime() < new Date().getTime();

                                    return (
                                        <HStack key={index} width={'full'} justifyContent={'space-between'} >
                                            <HStack alignItems={'center'} space={1}>
                                                <Avatar bg={'white'} _text={{ fontSize: 'sm' }} size={'xs'}>{index + 1}</Avatar>
                                                <VStack>
                                                    <Text maxW={'95%'} color={'white'} fontWeight={'bold'}>{item.quizTitle}</Text>
                                                    <Text color={isQuizAccessibleForBegin ? 'white' : 'red.700'} fontSize={'xs'}><Text fontWeight={'bold'}>Start: </Text>{new Date(item.gameStart).toLocaleString()}</Text>
                                                    <Text color={isQuizAccessibleForLast ? 'white' : 'red.700'} fontSize={'xs'}><Text fontWeight={'bold'}>Finish: </Text>{new Date(item.gameEnd).toLocaleString()}</Text>
                                                </VStack>
                                            </HStack>
                                            <Button isDisabled={(!isQuizAccessibleForBegin || !isQuizAccessibleForLast)} colorScheme="amber" _text={{ fontWeight: 'bold' }} onPress={() => onSubmitJoin(item)}>Join</Button>
                                        </HStack>
                                    );
                                })}
                            </VStack>
                        </Box>
                    </ScrollView>}
                    {(findGameMutation.isError && findGameMutation.error.response.status === 404) && <ScrollView maxH={300} maxWidth={'80%'} width={'full'} overflow={'hidden'}>
                        <Box bg={'indigo.400'} py={2} px={4} rounded={'lg'}>
                            <Heading textAlign={'center'} color={'white'}>No Game Found</Heading>
                        </Box>
                    </ScrollView>}
                </VStack>

                <Pressable onPress={() => navigation.navigate('Home')} position={'absolute'} top={2} right={2}>
                    <Avatar size={'sm'} bg={'gray.700'}>
                        <Icon color={'white'} as={Ionicons} name={'close'} size={'sm'} />
                    </Avatar>
                </Pressable>
            </Center >
            <Image position={'absolute'} zIndex={-1} source={ImageLinks.quiz_join_bg} alt={'xd'} resizeMode={'cover'} height={windowHeight} width={windowWidth} />

        </KeyboardAvoidingView >

    );
};

export default QuizJoinScreen;
