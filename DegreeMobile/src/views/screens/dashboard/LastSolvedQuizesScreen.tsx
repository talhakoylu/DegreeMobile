import CustomContainer from '@components/CustomContainer';
import StandardLayout from '@views/layouts/StandardLayout';
import { Avatar, Box, HStack, IconButton, Text, VStack } from 'native-base';
import React, { useContext } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../contexts/AuthContext';
import { AxiosContext } from '../../../contexts/AxiosContext';

interface ResultItemProps {
    data: any;
    [key: string]: any;
}

const ResultItem: React.FC<ResultItemProps> = ({ data, itemCount, ...props }) => {
    return (
        <Box width={'full'} rounded="md" py={2} {...props}>
            <HStack space={2} justifyContent={'space-between'} alignItems={'center'}>
                <Avatar size={'sm'}>{itemCount + 1}</Avatar>
                <Box width={'full'} maxWidth={'70%'}>

                    <VStack>
                        <Text fontWeight={'bold'}>{data.quizTitle}</Text>
                        <Text>Total Question: <Text fontWeight={'bold'}>{data.questionCount}</Text>  <Text>Correct: <Text fontWeight={'bold'}>{data.correctCount}/{data.answers.length}</Text></Text></Text>

                    </VStack>
                </Box>
                <IconButton colorScheme="indigo" variant={'solid'} _icon={{
                    as: MaterialCommunityIcons,
                    name: 'eye',
                    size: 'sm',
                }} onPress={() => props.navigation?.navigate('QuizResultScreen', {data: data?.answers })}/>
            </HStack>
        </Box>
    );
};



const LastSolvedQuizesScreen: React.FC = ({ navigation }) => {
    const authContext = useContext(AuthContext);
    const { authAxios } = useContext(AxiosContext);

    const lastSolvedQuizzesQuery = useQuery('lastSolvedQuizzesQuery', async () => authAxios.get('/quiz-result//find-all-results-by-user-id'), { enabled: authContext?.authState?.user ? true : false });

    return (
        <StandardLayout>
            <CustomContainer>
                {lastSolvedQuizzesQuery.isSuccess && lastSolvedQuizzesQuery.data.data.data.map((item, index) => <ResultItem data={item} key={index} itemCount={index} navigation={navigation} />)}
            </CustomContainer>
        </StandardLayout>
    );
};

export default LastSolvedQuizesScreen;
