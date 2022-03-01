import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChangePasswordScreen, DashboardHomeScreen, DashboardSettingsScreen, LastSolvedQuizesScreen, UserSettingsScreen, HomeScreen, QuizDetailQuestionsAndAnswersScreen, QuizPostDetailScreen, LoginScreen, RegisterScreen } from '@views/screens/Index';

import React from 'react'
import { navigationRef } from './NavigationRef';

const Stack = createNativeStackNavigator();

const NavigationIndex: React.FC = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }} initialRouteName={"Login"}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="DashboardHome" component={DashboardHomeScreen} />
                <Stack.Screen name="DashboardSettings" component={DashboardSettingsScreen} />
                <Stack.Screen name="UserSettings" component={UserSettingsScreen} />
                <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
                <Stack.Screen name="LastSolvedQuizes" component={LastSolvedQuizesScreen} />
                <Stack.Screen name="QuizPostDetail" component={QuizPostDetailScreen} />
                <Stack.Screen name="QuizPostQuestionsAnswers" options={{ headerShown: true, title: "Question & Answers" }} component={QuizDetailQuestionsAndAnswersScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationIndex