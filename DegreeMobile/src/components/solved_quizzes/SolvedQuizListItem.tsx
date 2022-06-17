import { ILastSolvedQuizCardModel } from 'models/ILastSolvedQuizCardModel';
import { Box, HStack, Icon, Pressable, Text, VStack } from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface SolvedQuizItemProps {
    item: ILastSolvedQuizCardModel;
    [key: string]: any;
}

const SolvedQuizListItem: React.FC<SolvedQuizItemProps> = ({ item, count, ...props }) => {
    return (
        <Pressable onPress={() => props?.navigation.navigate('QuizResultScreen', {data: item?.answers})}>
            <HStack space={4} {...props}>
                <Box py={2} px={4} alignItems={'center'} justifyContent={'center'} rounded={'md'} bg={'fuchsia.300'}>{count + 1}</Box>
                <VStack space={1} flex={1} marginTop={-0.5} justifyContent={'space-between'}>
                    <Text bold noOfLines={1} fontSize={'md'}>{item.quizTitle}</Text>

                    <HStack space={2} alignItems={'center'} size={'sm'}>
                        <Icon as={AntDesign} name={'clockcircleo'} size={'xs'} color={'gray.400'} />
                        <Text color={'gray.400'} noOfLines={1} fontSize={'xs'}>{new Date(item.createdAt).toLocaleString()}</Text>
                    </HStack>
                    <HStack space={2} alignItems={'center'} size={'sm'}>
                        <>
                            <Icon as={AntDesign} name={'questioncircle'} size={'xs'} color={'gray.400'} />
                            <Text noOfLines={1} fontSize={'xs'}> Total Question: {item.questionCount}</Text>
                        </>
                        <>
                            <Icon as={AntDesign} name={'checkcircle'} size={'xs'} color={'gray.400'} />
                            <Text noOfLines={1} fontSize={'xs'}> Correct: {item.correctCount} / {item.answeredCount}</Text>
                        </>
                    </HStack>
                </VStack>
            </HStack>
        </Pressable>
    );
};

export default SolvedQuizListItem;
