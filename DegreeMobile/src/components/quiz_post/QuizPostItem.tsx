import CustomContainer from '@components/CustomContainer'
import { IQuizPostModel } from '@models/IQuizPostModel'
import { Button, Heading, HStack, Image, Text, VStack } from 'native-base'
import React from 'react'

interface Props {
    data: IQuizPostModel;
    [key: string]: any;
}

const QuizPostItem: React.FC<Props> = ({ data, ...props }) => {
    return (
        <CustomContainer>
            <VStack space={2} >
                <Image source={{ uri: data.imgPath }} alt={data.title} size={"xl"} minWidth={"full"} resizeMode={"cover"} height={160} rounded={"lg"} />

                <HStack justifyContent={"space-between"}>
                    <Text color={"gray.400"} fontSize={"xs"}>
                        <Text bold>{data.categoryName}</Text> Category
                    </Text>
                    <Text color={"gray.400"} fontSize={"xs"}>
                        {data.date.toDateString()}
                    </Text>
                </HStack>

                <Heading size={"md"} textAlign={"justify"}>
                    {data.title}
                </Heading>

                <Text color={"gray.500"} textAlign={"justify"}>
                    {data.description}
                </Text>

                <Button flex={1} colorScheme={"green"} _text={{
                    bold: true,
                    fontSize: "md"
                }} onPress={() => props.navigation?.navigate('QuizPostQuestionsAnswers', {quizId: data.id, data: data?.questions})}>
                    Questions & Answers
                </Button>

                <Text color={"danger.400"} fontSize={"sm"} textAlign={"justify"}>
                    !!! You cannot create a game from the phone. If you want to create a game, please use your web browser. !!!
                </Text>
            </VStack>
        </CustomContainer>
    )
}

export default QuizPostItem;