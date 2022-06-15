import CustomContainer from '@components/CustomContainer';
import { yupResolver } from '@hookform/resolvers/yup';
import StandardLayout from '@views/layouts/StandardLayout';
import { Avatar, Button, Divider, Heading, HStack, Input, ScrollView, VStack } from 'native-base';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import * as yup from 'yup';
const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
}).required();

import { AuthContext } from '../../../contexts/AuthContext';
import { AxiosContext } from '../../../contexts/AxiosContext';
const UserSettingsScreen: React.FC = () => {
    const authContext = useContext(AuthContext);

    const { control, isSubmitting, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: authContext?.authState?.user?.firstName,
            lastName: authContext?.authState?.user?.lastName,
            email: authContext?.authState?.user?.email,
        },
    });

  const {authAxios} = useContext(AxiosContext);

  const onSubmit = async (data: any) => {
      try {
        const response = await authAxios.patch('/user/update',data);

        const {data: user} = response.data;

        authContext.setAuthState({
            ...authContext?.authState,
          user,
        });

        Alert.alert('Guncelleme basarili!');
      } catch (error) {
        Alert.alert('Update Failed', error.response.data.message);
      }
  };

    return (
        <StandardLayout>
            <CustomContainer>
                <VStack flex={1} space={4} width={'100%'}>
                    <HStack justifyContent="center">
                        <Avatar bg="blueGray.500" size="2xl" source={{}} />
                    </HStack>
                    <Divider my={2} bg="gray.900" />
                    <HStack>
                        <ScrollView>
                            <Heading mx="3" size="sm" color={'blueGray.800'} paddingBottom={1}>Ad</Heading>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input mx="3" size="md" w="90%" maxWidth="300px"
                                    variant="filled" width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} borderRadius={'10'}
                                    backgroundColor={'gray.100'}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    />
                            )}
                            name="firstName"
                        />
                        </ScrollView>
                    </HStack>
                    <HStack>
                        <ScrollView>
                            <Heading mx="3" size="sm" color={'blueGray.800'} paddingBottom={1}>Soyad</Heading>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input mx="3" size="md" w="90%" maxWidth="300px"
                                    variant="filled" width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} borderRadius={'10'}
                                    backgroundColor={'gray.100'}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    />
                            )}
                            name="lastName"
                        />
                        </ScrollView>
                    </HStack>
                    <HStack>
                        <ScrollView>
                            <Heading mx="3" size="sm" color={'blueGray.800'} paddingBottom={1}>E-posta</Heading>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input mx="3" size="md" w="90%" maxWidth="300px"
                                    variant="filled" width={'full'} borderWidth={'1'} borderColor={'gray.200'} rounded={'md'} borderRadius={'10'}
                                    backgroundColor={'gray.100'}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    />
                            )}
                            name="email"
                        />
                        </ScrollView>
                    </HStack>


            <Button isLoading={isSubmitting} mx="3" w="90%" maxWidth="300px" backgroundColor={'blueGray.800'} onPress={handleSubmit(onSubmit)}>
                Save Changes
            </Button>

                    <Divider my={2} bg="gray.900" />
                </VStack>
            </CustomContainer>
        </StandardLayout>
    );
};

export default UserSettingsScreen;
