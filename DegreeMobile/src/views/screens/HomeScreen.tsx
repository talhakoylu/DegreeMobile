import CustomContainer from '@components/CustomContainer'
import JoinQuizHomeBox from '@components/JoinQuizHomeBox'
import LastSolvedQuizzes from '@components/solved_quizzes/LastSolvedQuizzes'
import StandardLayout from '@views/layouts/StandardLayout'
import Slider from '@components/slider/Slider'
import React from 'react'
import { Fab, Icon } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <>
            <StandardLayout>
                <CustomContainer>
                    <Slider/>
                </CustomContainer>
                <JoinQuizHomeBox />
                <LastSolvedQuizzes description='The last 5 quizzes you have joined.' enableLink />
            </StandardLayout>
            <Fab renderInPortal={false} shadow={2} size="sm" colorScheme={"purple"} icon={<Icon color="white" as={MaterialCommunityIcons} name="rocket-launch" size="sm" />} />
        </>
    )
}

export default HomeScreen;