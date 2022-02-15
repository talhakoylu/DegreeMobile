import CustomContainer from '@components/CustomContainer'
import JoinQuizHomeBox from '@components/JoinQuizHomeBox'
import LastSolvedQuizzes from '@components/solved_quizzes/LastSolvedQuizzes'
import StandardLayout from '@views/layouts/StandardLayout'
import Slider from '@components/slider/Slider'
import { ScrollView, VStack } from 'native-base'
import React from 'react'


const HomeScreen: React.FC = () => {
    return (
        <StandardLayout>
            <CustomContainer>
                <Slider />
            </CustomContainer>
            <JoinQuizHomeBox />
            <LastSolvedQuizzes description='The last 5 quizzes you have joined.' enableLink />
        </StandardLayout>
    )
}

export default HomeScreen;