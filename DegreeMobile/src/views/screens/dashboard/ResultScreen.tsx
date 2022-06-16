import CustomContainer from '@components/CustomContainer';
import StandardLayout from '@views/layouts/StandardLayout';
import { Avatar, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

const QuestionItem: React.FC<{ data: any, index: number }> = ({ data, index }) => {
    const { width } = useWindowDimensions();
    return (
        <VStack space={2} width={'full'} paddingBottom={4}>
            <HStack space={2} alignItems={'center'} paddingX={4} paddingRight={10} paddingY={2} bg={data.isGivenAnswerCorrect ? 'green.200' : 'red.200'} rounded={'md'} borderWidth={1} borderColor={'blue.200'}>
                <Avatar size={'sm'} bg={'purple.300'}>{index + 1}</Avatar>
                <RenderHtml source={{ html: data.questionText }} contentWidth={width} />
            </HStack>
            {data.answer1 && <HStack space={2} alignItems={'center'} paddingX={4} marginLeft={4} paddingY={2} bg={data.selectedAnswer === '1' ? 'purple.100' : 'gray.100'} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
                <Avatar size={'sm'} bg={data.correctAnswer === '1' ? 'warning.400' : 'gray.400'}>a</Avatar>
                <Text flex={1} color={'dark.100'}>
                    {data.answer1}
                </Text>
            </HStack>}
            {data.answer2 && <HStack space={2} alignItems={'center'} paddingX={4} marginLeft={4} paddingY={2} bg={data.selectedAnswer === '2' ? 'purple.100' : 'gray.100'} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
                <Avatar size={'sm'} bg={data.correctAnswer === '2' ? 'warning.400' : 'gray.400'}>b</Avatar>
                <Text flex={1} color={'dark.100'}>
                    {data.answer2}
                </Text>
            </HStack>}
            {data.answer3 && <HStack space={2} alignItems={'center'} paddingX={4} marginLeft={4} paddingY={2} bg={data.selectedAnswer === '3' ? 'purple.100' : 'gray.100'} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
                <Avatar size={'sm'} bg={data.correctAnswer === '3' ? 'warning.400' : 'gray.400'}>c</Avatar>
                <Text flex={1} color={'dark.100'}>
                    {data.answer3}
                </Text>
            </HStack>}
            {data.answer4 && <HStack space={2} alignItems={'center'} paddingX={4} marginLeft={4} paddingY={2} bg={data.selectedAnswer === '4' ? 'purple.100' : 'gray.100'} rounded={'md'} borderWidth={1} borderColor={'gray.300'}>
                <Avatar size={'sm'} bg={data.correctAnswer === '4' ? 'warning.400' : 'gray.400'}>d</Avatar>
                <Text flex={1} color={'dark.100'}>
                    {data.answer4}
                </Text>
            </HStack>}


        </VStack>
    );
};

const ResultScreen: React.FC = ({route}: any) => {
    return (
        <StandardLayout>
            <CustomContainer>

                {route.params.data?.length > 0 ? route.params.data.map((item: any, index: any) => {
                    return (
                        <QuestionItem data={item} index={index} key={index} />
                    );
                }) : <Text color={'danger.400'}>Any question and answer not found!.</Text>}
       
            </CustomContainer>
        </StandardLayout>
    );
};

export default ResultScreen;
