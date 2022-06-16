import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChangePasswordScreen, DashboardHomeScreen, HomeScreen, LastSolvedQuizesScreen, LoginScreen, QuizDetailQuestionsAndAnswersScreen, QuizJoinScreen, QuizPostDetailScreen, QuizResultScreen, RegisterScreen, UserSettingsScreen } from '@views/screens/Index';
import AnswersScreen from '@views/screens/quiz/AnswersScreen';

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { navigationRef } from './NavigationRef';

import AsyncStorage from '@react-native-community/async-storage';
import { View } from 'native-base';
import { AxiosContext } from '../contexts/AxiosContext';
const Stack = createNativeStackNavigator();
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const NavigationIndex: React.FC = () => {
    const authContext = useContext(AuthContext);
    const {authAxios} = useContext(AxiosContext);
    const [loading,setLoading] = useState(true);

    const loadJWT = useCallback(async () => {
      try {
        const getAuth = await AsyncStorage.getItem('auth');
        const auth = JSON.parse(getAuth);

        if (auth?.user && auth?.token){
          await authContext.setAuthState({
            ...auth,
            authenticated: true,
          });

          await sleep(1000);

          const response = await authAxios.get('/user/me');
          const {token, data: user} = response.data;

          authContext.setAuthState({
            token,
            user,
            authenticated: true,
          });
        }
      } catch (error) {
        console.log('error', error);
        AsyncStorage.removeItem('auth');
        authContext.setAuthState({
          token: null,
          authenticated: false,
        });
      } finally {
        setLoading(false);
      }
    }, []);

    useEffect(() => {
      loadJWT();
    }, [loadJWT]);

    return loading ? <View /> : (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }} initialRouteName={'Home'}>
                {authContext?.authState?.authenticated !== false ? <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="DashboardHome" component={DashboardHomeScreen} />
                <Stack.Screen name="UserSettings" component={UserSettingsScreen} />
                <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
                <Stack.Screen name="LastSolvedQuizes" component={LastSolvedQuizesScreen} />
                <Stack.Screen name="QuizPostDetail" component={QuizPostDetailScreen} />
                <Stack.Screen name="QuizPostQuestionsAnswers" options={{ headerShown: true, title: 'Question & Answers' }} component={QuizDetailQuestionsAndAnswersScreen} />
                <Stack.Screen name="QuizJoin" component={QuizJoinScreen} />
                <Stack.Screen name="QuizAnswers" component={AnswersScreen} />
                <Stack.Screen name="QuizResultScreen" component={QuizResultScreen} />
                </> : <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                </>}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationIndex;
