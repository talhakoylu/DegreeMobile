import CustomAlert from '@components/partials/CustomAlert';
import { HStack, ScrollView, Text, VStack } from 'native-base';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AxiosContext } from '../../contexts/AxiosContext';
import SliderItem from './SliderItem';

interface Props {
    heading?: string;
    description?: string;
    [key: string]: any;
}

const headingDefault = 'Last Created Quizzes';
const descriptionDefault = 'You can see the details of the last 5 quizzes added by other people by clicking on them.';

const Slider: React.FC<Props> = ({ heading = headingDefault, description = descriptionDefault, ...props }) => {
    const {publicAxios} = useContext(AxiosContext);
    const quizQuery = useQuery('findLast5Quizzes', async () => publicAxios.get('/quiz/find-last-5-quizzes'));

    return (
        <VStack space={2} {...props}>
            <Text fontSize={'md'} bold>
                {heading}
            </Text>
            <Text fontSize={'xs'} color={'gray.400'}>
                {description}
            </Text>
            {quizQuery.isFetching && <CustomAlert title="Yükleniyor" status="info" />}
            {quizQuery.isError && <CustomAlert title="Something went wrong while fetching the data." status="error" />}
            {quizQuery.isSuccess && <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <HStack space={3} justifyContent={'space-between'} >
                    { quizQuery.data.data.data.map((item, index) => <SliderItem imageUri={`http://localhost:8080/${item.coverImage}`}
                        heading={item.title} quizId={item.slug} key={index}
                    />)}
                </HStack>
            </ScrollView>}
        </VStack>

    );
};




export default Slider;

