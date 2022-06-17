import PressableAnswer from '@components/quiz/PressableAnswer';
import { Box, Button, Center, Heading, HStack, ScrollView, Spinner, Text, VStack } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import RenderHtml from 'react-native-render-html';
import { useMutation, useQuery } from 'react-query';
import { AxiosContext } from '../../../contexts/AxiosContext';


export const delay = (ms) => new Promise((res) => setTimeout(res, ms));


const AnswersScreen: React.FC = ({ route, navigation }) => {
    const [startTimer, setStartTimer] = useState(false);
    const [isTimeEnd, setIsTimeEnd] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const [questionData, setQuestionData] = useState();
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [restartTimer, setRestartTimer] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isFinishButtonClicked, setIsFinishButtonClicked] = useState(false);

    const { authAxios } = useContext(AxiosContext);
    const questionsQuery = useQuery('questionsQuery', async () => await authAxios.get('/game/get-questions/' + route.params.quizId), { enabled: route.params.quizId ? true : false });
    const submitAnswerMutation = useMutation(async (data: any) => await authAxios.post('/quiz-result/add-answer-result/' + data.resultId, data.data));

    // useEffect(() => {
    //     new Promise(() => {
    //         setTimeout(() => {
    //             setStartTimer(true);
    //         }, 2000);
    //     });
    // }, []);

    useEffect(() => {
        if (questionsQuery.isSuccess) {
            // console.log(questionsQuery.data.data.data);
            if (currentQuestionNumber > questionsQuery.data.data.data.length - 1) {
                setIsFinished(true);
                setQuestionData(undefined);
            } else {
                setQuestionData(questionsQuery.data.data.data[currentQuestionNumber]);
            }

        }
    }, [questionsQuery.isSuccess, currentQuestionNumber]);

    const onPressSave = async () => {
        if (!isLoading) {
            await setIsLoading(true);
            const answer: any = {
                ...questionData,
                questionId: questionData._id,
                _id: undefined,
                selectedAnswer: selectedAnswer === '-' ? '' : selectedAnswer,
            };
            console.log('answer', answer);
            await submitAnswerMutation.mutateAsync({ resultId: route?.params?.resultId, data: answer });
            await setIsLoading(false);
        }
    };

    useEffect(() => {
        if (submitAnswerMutation.isSuccess) {
            setCurrentQuestionNumber(prev => prev + 1);
            setRestartTimer(prev => prev + 1);
            setSelectedAnswer('');
        }
    }, [submitAnswerMutation.isSuccess]);

    const onSubmitFinish = () => {
        setQuestionData(undefined);
        setIsFinishButtonClicked(true);
    };

    const onSubmitResultPage = () => {
        navigation.replace('LastSolvedQuizes');
    };

    return (
        <ScrollView minHeight={Dimensions.get('screen').height}>

            {(questionsQuery.isSuccess && questionData) && <VStack paddingY={4} space={8} minHeight={Dimensions.get('screen').height * 0.9}>
                <HStack justifyContent={'center'} alignItems={'center'} space={4}>
                    <Text>Kalan Zaman: </Text>
                    <CountdownCircleTimer
                        key={restartTimer}
                        isPlaying={true}
                        duration={questionData.timer}
                        strokeWidth={6}
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[questionData.timer / 1.5, questionData.timer / 2, questionData.timer / 4, 0]}
                        size={50}
                        onComplete={() => onPressSave()}
                    >
                        {({ remainingTime }) => <Text>{remainingTime}</Text>}
                    </CountdownCircleTimer>
                    <Button onPress={()=> setRestartTimer(prev => prev + 1)} >Restart</Button>
                </HStack>

                <Center>
                    <Box width={Dimensions.get('screen').width * 0.9} bg={'info.200'} rounded={'lg'} paddingY={2} paddingX={4}>
                        <VStack>
                            <Heading size={'sm'} textAlign={'center'}>Question {currentQuestionNumber + 1}</Heading>
                            <RenderHtml source={{ html: questionData.questionText }} contentWidth={Dimensions.get('screen').width * 0.9} />
                        </VStack>
                    </Box>
                </Center>

                <Center flex={1}>

                    <VStack justifyContent={'center'} width={Dimensions.get('screen').width * 0.9} marginBottom={5} paddingBottom={5} space={3} flex={1}>

                        {questionData.answer1 && <PressableAnswer isDisabled={isTimeEnd} choiceLetter="A" answerText={questionData.answer1} color1="info.300" color2={'info.500'} onPress={() => {
                            setSelectedAnswer('1');
                        }} borderWidth={selectedAnswer === '1' ? 2 : 0} borderColor={'info.500'} />}

                        {questionData.answer2 && <PressableAnswer isDisabled={isTimeEnd} choiceLetter="B" answerText={questionData.answer2} color1="success.300" color2={'success.500'} onPress={() => {
                            setSelectedAnswer('2');
                        }} borderWidth={selectedAnswer === '2' ? 2 : 0} borderColor={'success.500'} />}

                        {questionData.answer3 && <PressableAnswer isDisabled={isTimeEnd} choiceLetter="C" answerText={questionData.answer3} color1="warning.300" color2={'warning.500'} onPress={() => {
                            setSelectedAnswer('3');
                        }} borderWidth={selectedAnswer === '3' ? 2 : 0} borderColor={'warning.500'} />}

                        {questionData.answer4 && <PressableAnswer isDisabled={isTimeEnd} choiceLetter="D" answerText={questionData.answer4} color1="purple.300" color2={'purple.500'} onPress={() => {
                            setSelectedAnswer('4');
                        }} borderWidth={selectedAnswer === '4' ? 2 : 0} borderColor={'purple.500'} />}

                        <PressableAnswer isDisabled={isTimeEnd} choiceLetter="-" answerText={'Boş bırak'} color1="gray.300" color2={'gray.400'} onPress={() => {
                            setSelectedAnswer('-');
                        }} borderWidth={selectedAnswer === '-' ? 2 : 0} borderColor={'gray.500'} />
                    </VStack>

                    <HStack width={Dimensions.get('screen').width * 0.9} justifyContent={'space-between'}>
                        <Button colorScheme={'red'} onPress={() => onSubmitFinish()}>Sınavdan Çık</Button>
                        <Button colorScheme={'green'} isDisabled={selectedAnswer === '' ? true : false} onPress={() => onPressSave()} isLoading={isLoading} isLoadingText={'Saving'}>Cevabı Kaydet</Button>
                    </HStack>
                </ Center>
            </VStack>
            }
            {questionsQuery.isFetching && <Center height={Dimensions.get('window').height}>
                <HStack space={2} justifyContent="center">
                    <Spinner />
                    <Heading color="primary.500" fontSize="md">
                        Fetching the data
                    </Heading>
                </HStack>
            </Center>}
            {(isFinished || isFinishButtonClicked) && <Center height={Dimensions.get('window').height}>
                <VStack space={2} justifyContent="center">
                    <Heading color="primary.500" fontSize="md">
                        Sınav Tamamlandı
                    </Heading>
                    <Button onPress={() => onSubmitResultPage()}>Sonuçlara git</Button>
                </VStack>
            </Center>}

        </ScrollView>
    );
};

export default AnswersScreen;
