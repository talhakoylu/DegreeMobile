import PressableAnswer from '@components/quiz/PressableAnswer';
import { Box, Center, Heading, HStack, ScrollView, Spinner, Text, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const data = {
    quiz_id: 1,
    question_id: 4,
    question: 'Example question text',
    answer_1: 'Answer 1 content',
    answer_2: 'Answer 2 content',
    answer_3: 'Answer 3 content',
    answer_4: 'Answer 4 content',
};

const AnswersScreen: React.FC = ({route}) => {
    const [startTimer, setStartTimer] = useState(false);
    const [isTimeEnd, setIsTimeEnd] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('');

    useEffect(() => {
        new Promise(() => {
            setTimeout(() => {
                setStartTimer(true);
            }, 2000);
        });
    }, []);

    console.log(route?.params);

    return (
        <ScrollView minHeight={Dimensions.get('screen').height}>
            {!isTimeEnd ?
                <VStack paddingY={4} space={8} minHeight={Dimensions.get('screen').height * 0.9}>
                    <HStack justifyContent={'center'} alignItems={'center'} space={4}>
                        <Text>Kalan Zaman: </Text>
                        <CountdownCircleTimer
                            isPlaying={startTimer}
                            duration={7}
                            strokeWidth={6}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[7, 5, 2, 0]}
                            size={50}
                            onComplete={() => {
                                setIsTimeEnd(true);
                                setIsSelected(true);
                            }}
                        >
                            {({ remainingTime }) => <Text>{remainingTime}</Text>}
                        </CountdownCircleTimer>

                    </HStack>

                    <Center>
                        <Box width={Dimensions.get('screen').width * 0.9} bg={'info.300'} rounded={'lg'} paddingY={2} paddingX={4}>
                            Example question text
                        </Box>
                    </Center>

                    <Center flex={1}>

                        <VStack justifyContent={'center'} width={Dimensions.get('screen').width * 0.9} marginBottom={5} paddingBottom={5} space={6} flex={1}>

                            {data.answer_1 && <PressableAnswer isDisabled={isTimeEnd || isSelected} choiceLetter="A" answerText="xdd" color1="info.300" color2={'info.500'} onPress={() => {
                                setSelectedAnswer('answer_1');
                                setIsSelected(true);
                            }} borderWidth={selectedAnswer === 'answer_1' ? 2 : 0} borderColor={'info.500'} />}

                            {data.answer_2 && <PressableAnswer isDisabled={isTimeEnd || isSelected} choiceLetter="B" answerText="xd" color1="success.300" color2={'success.500'} onPress={() => {
                                setSelectedAnswer('answer_2');
                                setIsSelected(true);
                            }} borderWidth={selectedAnswer === 'answer_2' ? 2 : 0} borderColor={'success.500'} />}

                            {data.answer_3 && <PressableAnswer isDisabled={isTimeEnd || isSelected} choiceLetter="C" answerText="xd" color1="warning.300" color2={'warning.500'} onPress={() => {
                                setSelectedAnswer('answer_3');
                                setIsSelected(true);
                            }} borderWidth={selectedAnswer === 'answer_3' ? 2 : 0} borderColor={'warning.500'} />}

                            {data.answer_4 && <PressableAnswer isDisabled={isTimeEnd || isSelected} choiceLetter="D" answerText="xd" color1="purple.300" color2={'purple.500'} onPress={() => {
                                setSelectedAnswer('answer_4');
                                setIsSelected(true);
                            }} borderWidth={selectedAnswer === 'answer_4' ? 2 : 0} borderColor={'purple.500'} />}
                        </VStack>


                    </ Center>
                </VStack>
                : <Center height={Dimensions.get('window').height}>
                    <HStack space={2} justifyContent="center">
                        <Spinner />
                        <Heading color="primary.500" fontSize="md">
                            Waiting for the next question
                        </Heading>
                    </HStack>
                </Center>
            }
        </ScrollView>
    );
};

export default AnswersScreen;
