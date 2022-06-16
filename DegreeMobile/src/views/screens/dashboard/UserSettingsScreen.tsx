import CustomContainer from '@components/CustomContainer';
import { yupResolver } from '@hookform/resolvers/yup';
import StandardLayout from '@views/layouts/StandardLayout';
import { Avatar, Box, Button, Divider, FormControl, HStack, Input, useToast, VStack } from 'native-base';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
}).required();

import { AuthContext } from '../../../contexts/AuthContext';
import { AxiosContext } from '../../../contexts/AxiosContext';
const UserSettingsScreen: React.FC = () => {
    const toast = useToast();
    const authContext = useContext(AuthContext);

    const { control, isSubmitting, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: authContext?.authState?.user?.firstName,
            lastName: authContext?.authState?.user?.lastName,
            email: authContext?.authState?.user?.email,
        },
    });

    const { authAxios } = useContext(AxiosContext);

    const onSubmit = async (data: any) => {
        try {
            const response = await authAxios.patch('/user/update', data);

            const { data: user } = response.data;

            authContext.setAuthState({
                ...authContext?.authState,
                user,
            });

            if (response.status === 200) {
                return toast.show({
                    render: () => {
                        return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                            User has been successfully updated.
                        </Box>;
                    },
                });
            }
        } catch (error) {
            toast.show({
                render: () => {
                    return <Box bg="danger.500" px="2" py="1" rounded="sm" mb={5}>
                        {error.response.data.message}
                    </Box>;
                },
            });
        }
    };

    return (
        <StandardLayout>
            <CustomContainer>
                <VStack flex={1} space={4} width={'100%'}>
                    <HStack justifyContent="center">
                        <Avatar bg="blueGray.500" size="2xl" >{authContext?.authState?.user?.fullName?.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')}</Avatar>
                    </HStack>
                    <Divider my={2} bg="gray.900" />
                    <FormControl isInvalid={'firstName' in errors}>
                        <FormControl.Label _text={{ fontWeight: 'bold', fontSize: 'md' }}>First Name</FormControl.Label>
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
                    </FormControl>
                    <FormControl isInvalid={'lastName' in errors}>
                        <FormControl.Label _text={{ fontWeight: 'bold', fontSize: 'md' }}>Last Name</FormControl.Label>
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
                    </FormControl>
                    <FormControl isInvalid={'email' in errors}>
                        <FormControl.Label _text={{ fontWeight: 'bold', fontSize: 'md' }}>Email</FormControl.Label>
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
                    </FormControl>


                    <Button isLoading={isSubmitting} mx="3" w="90%" maxWidth="300px" backgroundColor={'blueGray.800'} onPress={handleSubmit(onSubmit)}>
                        Save Changes
                    </Button>

                </VStack>
            </CustomContainer>
        </StandardLayout>
    );
};

export default UserSettingsScreen;
