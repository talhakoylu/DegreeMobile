import CustomContainer from '@components/CustomContainer';
import JoinQuizHomeBox from '@components/JoinQuizHomeBox';
import Slider from '@components/slider/Slider';
import LastSolvedQuizzes from '@components/solved_quizzes/LastSolvedQuizzes';
import StandardLayout from '@views/layouts/StandardLayout';
import { Fab, Icon } from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <>
            <StandardLayout>
                <CustomContainer>
                    <Slider/>
                </CustomContainer>
                <JoinQuizHomeBox />
                <LastSolvedQuizzes description="The last 5 quizzes you have joined." enableLink navigation={navigation} />
            </StandardLayout>
            <Fab renderInPortal={false} shadow={2} size="sm" colorScheme={'purple'} icon={<Icon color="white" as={MaterialCommunityIcons} onPress={() => navigation.navigate('QuizJoin')} name="rocket-launch" size="sm" />} />
        </>
    );
};

export default HomeScreen;
