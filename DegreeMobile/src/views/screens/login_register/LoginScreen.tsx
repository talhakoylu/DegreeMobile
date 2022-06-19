import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-community/async-storage';
import RegistrationLayout from '@views/layouts/RegistrationLayout';
import { Box, Button, FormControl, IconButton, Input, Link, VStack } from 'native-base';
import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import * as yup from 'yup';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();

import { AuthContext } from '../../../contexts/AuthContext';
import { AxiosContext } from '../../../contexts/AxiosContext';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


  const authContext = useContext(AuthContext);
  const {publicAxios} = useContext(AxiosContext);

    const onSubmit = async ({email,password}: any) => {
        try {
          const response = await publicAxios.post('/user/login', {
            email,
            password,
          });

          const {token, data: user} = response.data;

          authContext.setAuthState({
            token,
            user,
            authenticated: true,
          });

          await AsyncStorage.setItem(
            'auth',
              JSON.stringify({
                user,
                token,
              })
          );
        } catch (error) {
          Alert.alert('Login Failed', error.response.data.message);
        }
    };

    return (
        <RegistrationLayout title={'Sign In'} description={'If you want to use this application, you need to login to your account.'} footerRoutPathName="Register" navigation={navigation} >
            <VStack space={3}>
                <FormControl isInvalid={'email' in errors}>
                    <Box style={{ elevation: 1 }} bg={'white'} rounded={'xl'} paddingX={2} paddingY={2} width={'full'} >
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    variant={'unstyled'}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    fontSize={'sm'} placeholder="Email"
                                />
                            )}
                            name="email"
                        />
                    </Box>
                    <FormControl.ErrorMessage paddingLeft={1}>
                        {errors.email?.message}
                    </FormControl.ErrorMessage>
                </FormControl>


                <FormControl isInvalid={'password' in errors}>
                    <Box style={{ elevation: 1 }} bg={'white'} rounded={'xl'} paddingX={2} paddingY={2} width={'full'} >
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    type={show ? 'text' : 'password'} fontSize={'sm'} variant={'unstyled'} placeholder="Password" InputRightElement={<IconButton size={'lg'} _icon={{
                                        as: Entypo,
                                        name: show ? 'eye' : 'eye-with-line',
                                        size: 'sm',
                                        color: !show ? 'gray.400' : 'gray.600',
                                    }} _pressed={{
                                        bg: 'white',
                                    }} onPress={handleClick} variant={'ghost'} />}
                                />
                            )}
                            name="password"
                        />
                    </Box>
                    <FormControl.ErrorMessage paddingLeft={1}>
                        {errors.password?.message}
                    </FormControl.ErrorMessage>
                </FormControl>
            </VStack>

            <Link alignSelf={'flex-end'} _text={{
                color: 'gray.500',
            }} isUnderlined={false} onPress={() => Alert.alert('password recovery onpress')}>Recovery Password</Link>

            <Button _text={{
                bold: true,
                fontSize: 'md',
            }} height={60} rounded={'xl'} colorScheme={'red'} width={'full'} shadow={'4'} onPress={handleSubmit(onSubmit)}>
                Sign In
            </Button>

        </RegistrationLayout>
    );
};

export default LoginScreen;
