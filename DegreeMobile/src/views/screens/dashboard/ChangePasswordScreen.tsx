import CustomContainer from '@components/CustomContainer';
import { yupResolver } from '@hookform/resolvers/yup';
import StandardLayout from '@views/layouts/StandardLayout';
import { Box, Button, Divider, FormControl, Heading, HStack, Input, useToast, VStack } from 'native-base';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { AuthContext } from '../../../contexts/AuthContext';
import { AxiosContext } from '../../../contexts/AxiosContext';


const schema = yup.object({
    oldPassword: yup.string().required('Current password is required.'),
    password: yup.string()
        .required('Password is required.')
        .min(6, 'Password must be at least 6 characters.')
        .max(36, 'Password can be up to 36 characters.')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])/,
            'Password must contain at least 1 uppercase and lowercase letters.')
        .matches(
            /^(?=.*[0-9])/,
            'Password must contain at least 1 number.')
        .matches(
            /^(?=.*[!@_#\$%\^&\*])/,
            'Password must contain at least 1 symbol.'),
    passwordConfirm: yup.string()
        .required('Confirm password is required.')
        .oneOf([yup.ref('password')], 'Password must match.'),
}).required();

const ChangePasswordScreen: React.FC = () => {
    const toast = useToast();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const authContext = useContext(AuthContext);
    const { authAxios } = useContext(AxiosContext);

    const onSubmit = async (data: any) => {
        try {
            delete data.passwordConfirm;
            const response = await authAxios.patch('/user/update', data);
            if (response.status === 200) {
                return toast.show({
                    render: () => {
                        return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                            Password has been successfully updated.
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
                    <HStack justifyContent={'center'}>
                        <Heading size="md" color={'blueGray.800'}> Change Your Password </Heading>
                    </HStack>
                    <Divider my={2} bg="gray.900" />
                    <FormControl isInvalid={'oldPassword' in errors}>
                        <FormControl.Label _text={{ fontWeight: 'bold', fontSize: 'md' }}>Old Password</FormControl.Label>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    variant="filled"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    type="password"
                                    size="md" placeholder="Please Enter Your Current Password..."
                                    borderWidth={'1'} borderColor={'gray.200'}
                                    rounded={'lg'}
                                    backgroundColor={'gray.100'}
                                />
                            )}
                            name="oldPassword"
                        />
                        <FormControl.ErrorMessage paddingLeft={1}>
                            {errors.oldPassword?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={'password' in errors}>
                        <FormControl.Label _text={{ fontWeight: 'bold', fontSize: 'md' }}>New Password</FormControl.Label>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    variant="filled"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    type="password"
                                    size="md" placeholder="Please Enter Your New Password..."
                                    borderWidth={'1'} borderColor={'gray.200'}
                                    rounded={'lg'}
                                    backgroundColor={'gray.100'}
                                />
                            )}
                            name="password"
                        />
                        <FormControl.ErrorMessage paddingLeft={1}>
                            {errors.password?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={'passwordConfirm' in errors}>
                        <FormControl.Label _text={{ fontWeight: 'bold', fontSize: 'md' }}>New Password Confirm</FormControl.Label>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    variant="filled"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    type="password"
                                    size="md" placeholder="Please Enter Your New Password Again..."
                                    borderWidth={'1'} borderColor={'gray.200'}
                                    rounded={'lg'}
                                    backgroundColor={'gray.100'}
                                />
                            )}
                            name="passwordConfirm"
                        />
                        <FormControl.ErrorMessage paddingLeft={1}>
                            {errors.passwordConfirm?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>


                    <Button backgroundColor={'blueGray.800'} onPress={handleSubmit(onSubmit)}>Update</Button>
                </VStack>
            </CustomContainer>
        </StandardLayout>
    );
};

export default ChangePasswordScreen;
