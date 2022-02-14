import { ILastSolvedQuizCardModel } from 'models/ILastSolvedQuizCardModel';
import { Center, Container, HStack, Icon, Image, Link, Text, VStack } from 'native-base';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { ExampleSolvedQuizData } from '../../../data/ExampleSolvedQuizData';
import CustomContainer from '../CustomContainer';
import SolvedQuizListItem from './SolvedQuizListItem';

interface Props {
    title?: string;
    description?: string;
    enableLink?: boolean;
    [key: string]: any;
}

const data: ILastSolvedQuizCardModel[] = ExampleSolvedQuizData

const LastSolvedQuizzes: React.FC<Props> = ({ title = "Last Solved Quizzes", description, enableLink = false, ...props }) => {
    return (
        <CustomContainer>
            <VStack space={3} width={"100%"} {...props}>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontWeight={"bold"} fontSize={"lg"}>
                        {title}
                    </Text>
                    {
                        enableLink &&
                        <Link isUnderlined={false} onPress={() => Alert.alert("Sa")}>
                            <Text fontSize={"xs"} color={"yellow.600"}>Show More</Text>
                        </Link>
                    }
                </HStack>

                {
                    description &&
                    <Text color={"gray.500"} marginTop={-1} marginBottom={2}>{description}</Text>
                }

                {data.slice(0,5).map((item, index) => {
                    return (<SolvedQuizListItem item={item} key={index} />)
                })}
            </VStack>
        </CustomContainer>
    )
}
      
export default LastSolvedQuizzes;