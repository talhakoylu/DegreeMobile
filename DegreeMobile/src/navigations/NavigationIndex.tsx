import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChangePasswordScreen from '@views/screens/dashboard/ChangePasswordScreen';
import DashboardHomeScreen from '@views/screens/dashboard/DashboardHomeScreen';
import DashboardSettingsScreen from '@views/screens/dashboard/DashboardSettingsScreen';
import LastSolvedQuizesScreen from '@views/screens/dashboard/LastSolvedQuizesScreen';
import UserSettingsScreen from '@views/screens/dashboard/UserSettingsScreen';
import HomeScreen from '@views/screens/HomeScreen';
import QuizDetailQuestionsAndAnswersScreen from '@views/screens/QuizDetailQuestionsAndAnswersScreen';
import QuizPostDetailScreen from '@views/screens/QuizPostDetailScreen';
import React from 'react'
import { navigationRef } from './NavigationRef';

const Stack = createNativeStackNavigator();

const NavigationIndex: React.FC = () => {
    
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator  screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="DashboardHome" component={DashboardHomeScreen} />
                <Stack.Screen name="DashboardSettings" component={DashboardSettingsScreen} />
                <Stack.Screen name="UserSettings" component={UserSettingsScreen} />
                <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
                <Stack.Screen name="LastSolvedQuizes" component={LastSolvedQuizesScreen} />
                <Stack.Screen name="QuizPostDetail" component={QuizPostDetailScreen} />
                <Stack.Screen name="QuizPostQuestionsAnswers"  options={{headerShown: true, title: "Question & Answers"}} component={QuizDetailQuestionsAndAnswersScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationIndex