import { ILastSolvedQuizCardModel } from 'models/ILastSolvedQuizCardModel';
import { HStack, Link, Text, VStack } from 'native-base';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { ExampleSolvedQuizData } from '../../../data/ExampleSolvedQuizData';
import { AuthContext } from '../../contexts/AuthContext';
import { AxiosContext } from '../../contexts/AxiosContext';
import CustomContainer from '../CustomContainer';
import SolvedQuizListItem from './SolvedQuizListItem';

interface Props {
    title?: string;
    description?: string;
    enableLink?: boolean;
    [key: string]: any;
}

const data: ILastSolvedQuizCardModel[] = ExampleSolvedQuizData;

const LastSolvedQuizzes: React.FC<Props> = ({ title = 'Last Solved Quizzes', description, enableLink = false, ...props }) => {
    const authContext = useContext(AuthContext);
    const { authAxios } = useContext(AxiosContext);
    const last5SolvedQuizzesQuery = useQuery('last5SolvedQuizzesQuery', async () => await authAxios.get('/quiz-result/find-last-5-results-by-user-id'), { enabled: authContext?.authState?.user ? true : false });

    if (last5SolvedQuizzesQuery.isSuccess){
        console.log(last5SolvedQuizzesQuery.data.data.data);
    }

    return (
        <CustomContainer>
            <VStack space={3} width={'100%'} {...props}>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontWeight={'bold'} fontSize={'md'}>
                        {title}
                    </Text>
                    {
                        enableLink &&
                        <Link isUnderlined={false} onPress={() => props?.navigation.navigate('LastSolvedQuizes')}>
                            <Text fontSize={'xs'} color={'yellow.600'}>Show More</Text>
                        </Link>
                    }
                </HStack>

                {
                    description &&
                    <Text color={'gray.500'} marginTop={-1} marginBottom={2}>{description}</Text>
                }

                { last5SolvedQuizzesQuery.isSuccess && last5SolvedQuizzesQuery.data.data.data.map((item, index) => {
                    return (<SolvedQuizListItem navigation={props?.navigation} count={index} alignItems={'center'} item={item} key={index} />);
                })}
            </VStack>
        </CustomContainer>
    );
};

export default LastSolvedQuizzes;
