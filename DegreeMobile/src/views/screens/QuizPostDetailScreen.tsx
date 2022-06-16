import CustomAlert from '@components/partials/CustomAlert';
import QuizPostItem from '@components/quiz_post/QuizPostItem';
import StandardLayout from '@views/layouts/StandardLayout';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AxiosContext } from '../../contexts/AxiosContext';

const QuizPostDetailScreen: React.FC = ({ route, navigation }: any) => {
    const { publicAxios } = useContext(AxiosContext);
    const quizDetailQuery = useQuery('getQuizDetailsBySlug', async () => await publicAxios.get('/quiz/get-quiz-by-slug/' + route.params.quizId), { enabled: route.params.quizId ? true : false });

    if (quizDetailQuery.isSuccess){
        console.log(quizDetailQuery.data.data);
    }

    return (
        <StandardLayout>
            {console.log(route.params?.quizId)}
            {quizDetailQuery.isLoading && <CustomAlert title={'Loading'} status={'info'} />}
            {quizDetailQuery.isSuccess && <QuizPostItem data={quizDetailQuery.data.data.data} navigation={navigation} />}
            {quizDetailQuery.isError && <CustomAlert title="Veriler getirilirken bir hata oluştu" status="error"/>}
        </StandardLayout>
    );
};

export default QuizPostDetailScreen;
