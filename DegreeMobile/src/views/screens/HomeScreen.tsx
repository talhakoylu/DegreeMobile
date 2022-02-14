import CustomContainer from '@components/CustomContainer'
import JoinQuizHomeBox from '@components/JoinQuizHomeBox'
import LastSolvedQuizzes from '@components/solved_quizzes/LastSolvedQuizzes'
import StandardLayout from '@views/layouts/StandardLayout'
import Slider from '@components/slider/Slider'
import { ScrollView } from 'native-base'
import React from 'react'



const HomeScreen: React.FC = () => {


    return (
        <ScrollView>
            <StandardLayout>
                <VStack space={4}>
                    <Slider />
                    <JoinQuizHomeBox />
                    <LastSolvedQuizzes description='The last 5 quizzes you have joined.' enableLink />
                </VStack>
            </StandardLayout>
        </ScrollView>

    )
}

export default HomeScreen;