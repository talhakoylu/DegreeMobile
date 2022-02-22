import CustomContainer from '@components/CustomContainer'
import { IQuestionPostModel } from '@models/IQuestionPostModel'
import { Avatar, Box, Center, Circle, Container, HStack, ScrollView, Text, VStack } from 'native-base'
import React from 'react'

const QuestionItem: React.FC<{ data: IQuestionPostModel, index: number }> = ({ data, index }) => {
    return (
        <VStack space={2} width={"full"}>
            <HStack space={2} alignItems={"center"} paddingX={4} paddingY={2} bg={"blue.100"} rounded={"md"} borderWidth={1} borderColor={"blue.200"}>
                <Avatar size={"sm"} bg={"orange.300"}>{index + 1}</Avatar>
                <Text flex={1} color={"dark.200"}>
                    {data.question}
                </Text>
            </HStack>
            {data.answer1 && <HStack space={2} alignItems={"center"} paddingX={4} marginLeft={4} paddingY={2} bg={"gray.300"} rounded={"md"} borderWidth={1} borderColor={"gray.300"}>
                <Avatar size={"sm"} bg={"gray.400"}>a</Avatar>
                <Text flex={1} color={"dark.100"}>
                    {data.answer1}
                </Text>
            </HStack>}
            {data.answer2 && <HStack space={2} alignItems={"center"} paddingX={4} marginLeft={4} paddingY={2} bg={"gray.200"} rounded={"md"} borderWidth={1} borderColor={"gray.300"}>
                <Avatar size={"sm"} bg={"gray.900"}>b</Avatar>
                <Text flex={1}>
                    {data.answer2}
                </Text>
            </HStack>}
            {data.answer3 && <HStack space={2} alignItems={"center"} paddingX={4} marginLeft={4} paddingY={2} bg={"gray.300"} rounded={"md"} borderWidth={1} borderColor={"gray.300"}>
                <Avatar size={"sm"} bg={"gray.400"}>c</Avatar>
                <Text flex={1} color={"dark.100"}>
                    {data.answer3}
                </Text>
            </HStack>}
            {data.answer4 && <HStack space={2} alignItems={"center"} paddingX={4} marginLeft={4} paddingY={2} bg={"gray.200"} rounded={"md"} borderWidth={1} borderColor={"gray.300"}>
                <Avatar size={"sm"} bg={"gray.900"}>d</Avatar>
                <Text flex={1}>
                    {data.answer4}
                </Text>
            </HStack>}


        </VStack>
    )
}

const QuizDetailQuestionsAndAnswersScreen: React.FC = ({ route }: any) => {
    return (
        <ScrollView marginBottom={1} paddingY={4} flex={1} height={"full"}>
            {console.log(route?.params?.quizId)}

            <CustomContainer>
                <VStack space={4} width={"full"}>
                    {route.params.data?.length > 0 ? route.params.data.map((item: any, index: any) => {
                        return (
                            <QuestionItem data={item} index={index} key={index} />
                        )
                    }) : <Text color={"danger.400"}>Any question and answer not found!.</Text>}
                </VStack>
            </CustomContainer>
        </ScrollView>
    )
}

export default QuizDetailQuestionsAndAnswersScreen