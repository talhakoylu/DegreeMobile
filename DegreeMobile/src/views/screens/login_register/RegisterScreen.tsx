import { yupResolver } from '@hookform/resolvers/yup';
import RegistrationLayout from '@views/layouts/RegistrationLayout';
import moment from 'moment';
import { Box, Button, FormControl, HStack, IconButton, Input, Link, Modal, Text, VStack } from 'native-base';
import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import * as yup from 'yup';
import { AuthContext } from '../../../contexts/AuthContext';
import { AxiosContext } from '../../../contexts/AxiosContext';

const schema = yup.object({
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
    firstName: yup.string()
        .required('First name is required.'),
    lastName: yup.string()
        .required('Last name is required.'),
    email: yup.string()
        .required('Email is required.')
        .email('Invalid email format.'),
    birthdate: yup.date().required('Birth Day is required.'),
}).required();

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassowrdClick = () => setShowPassword(!showPassword);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleShowConfirmPassowrdClick = () => setShowConfirmPassword(!showConfirmPassword);
    const [openModalTerms, setOpenModalTerms] = useState(false);
    const [openModalPrivacy, setOpenModalPrivacy] = useState(false);

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState<Date | null>();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: 'test',
            lastName: 'test',
            email: 'talhakoylu2@gmail.com',
            password: 'Talha_1998',
            passwordConfirm: 'Talha_1998',
        },
    });
    const authContext = useContext(AuthContext);
    const {publicAxios} = useContext(AxiosContext);
    const onSubmit = async (data: any) => {

        try {
            delete data.passwordConfirm;
            const response = await publicAxios.post('/user/register', data);

            navigation.navigate('Login');
          } catch (error) {
            Alert.alert('Register failed', error.response.data.message);
          }
    };

    return (
        <RegistrationLayout title={'Welcome Dear Guest!'} description={'You must be sign up and log in to your account to use this application.'} footerRoutPathName={'Login'} navigation={navigation}>
            <VStack space={3}>
                <FormControl isInvalid={'firstName' in errors}>
                    <Box style={{ elevation: 1 }} bg={'white'} rounded={'xl'} paddingX={2} paddingY={2} width={'full'} >
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    variant={'unstyled'}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    fontSize={'sm'} placeholder="First Name"
                                />
                            )}
                            name="firstName"
                        />
                    </Box>
                    <FormControl.ErrorMessage paddingLeft={1}>
                        {errors.firstName?.message}
                    </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isInvalid={'lastName' in errors}>
                    <Box style={{ elevation: 1 }} bg={'white'} rounded={'xl'} paddingX={2} paddingY={2} width={'full'} >
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    variant={'unstyled'}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    fontSize={'sm'} placeholder="Last Name"
                                />
                            )}
                            name="lastName"
                        />
                    </Box>
                    <FormControl.ErrorMessage paddingLeft={1}>
                        {errors.lastName?.message}
                    </FormControl.ErrorMessage>
                </FormControl>

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

                <FormControl isInvalid={'birthdate' in errors}>
                    <Box style={{ elevation: 1 }} bg={'white'} rounded={'xl'} paddingX={2} paddingY={2} width={'full'} >
                        <Button variant={'unstyled'} onPress={() => setShowDatePicker(true)}>
                            {date ? date.toDateString() : 'Select a birth day'}
                        </Button>

                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker
                                    modal
                                    title={'Select a birth day'}
                                    mode={'date'}
                                    open={showDatePicker}
                                    date={new Date(moment().subtract(13, 'years').toString())}
                                    maximumDate={new Date(moment().subtract(3, 'years').toString())}
                                    androidVariant={'iosClone'}
                                    onConfirm={(date) => {
                                        setShowDatePicker(false);
                                        onChange(date);
                                        setDate(date);
                                    }}
                                    onCancel={() => {
                                        setShowDatePicker(false);
                                    }}
                                />
                            )}
                            name="birthdate"
                        />
                    </Box>
                    <FormControl.ErrorMessage paddingLeft={1}>
                        {errors.birthdate?.message}
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
                                    type={showPassword ? 'text' : 'password'} fontSize={'sm'} variant={'unstyled'} placeholder="Password" InputRightElement={<IconButton size={'lg'} _icon={{
                                        as: Entypo,
                                        name: showPassword ? 'eye' : 'eye-with-line',
                                        size: 'sm',
                                        color: !showPassword ? 'gray.400' : 'gray.600',
                                    }} _pressed={{
                                        bg: 'white',
                                    }} onPress={handleShowPassowrdClick} variant={'ghost'} />}
                                />
                            )}
                            name="password"
                        />
                    </Box>
                    <FormControl.HelperText paddingLeft={1}>
                        Password must be between 6 and 36 characters, and contain atleast 1 upper and lower case character, symbol and number.
                    </FormControl.HelperText>
                    <FormControl.ErrorMessage paddingLeft={1}>
                        {errors.password?.message}
                    </FormControl.ErrorMessage>
                </FormControl>

                <FormControl isInvalid={'passwordConfirm' in errors}>
                    <Box style={{ elevation: 1 }} bg={'white'} rounded={'xl'} paddingX={2} paddingY={2} width={'full'} >
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    type={showConfirmPassword ? 'text' : 'password'} fontSize={'sm'} variant={'unstyled'} placeholder="Password Confirm" InputRightElement={<IconButton size={'lg'} _icon={{
                                        as: Entypo,
                                        name: showConfirmPassword ? 'eye' : 'eye-with-line',
                                        size: 'sm',
                                        color: !showConfirmPassword ? 'gray.400' : 'gray.600',
                                    }} _pressed={{
                                        bg: 'white',
                                    }} onPress={handleShowConfirmPassowrdClick} variant={'ghost'} />}
                                />
                            )}
                            name="passwordConfirm"
                        />
                    </Box>
                    <FormControl.HelperText paddingLeft={1}>
                        Password and confirm password must match.
                    </FormControl.HelperText>
                    <FormControl.ErrorMessage paddingLeft={1}>
                        {errors.passwordConfirm?.message}
                    </FormControl.ErrorMessage>
                </FormControl>

                <HStack space={1} flexWrap={'wrap'}>
                    <Text color={'gray.600'} fontSize={'xs'}>When you register, you are deemed to have accepted the</Text>
                    <Link isUnderlined={false} _text={{ fontSize: 'xs', color: 'darkBlue.500' }} onPress={() => setOpenModalTerms(true)}>Terms & Conditions</Link>
                    <Text color={'gray.600'} fontSize={'xs'}>and</Text>
                    <Link isUnderlined={false} _text={{ fontSize: 'xs', color: 'darkBlue.500' }} onPress={() => setOpenModalPrivacy(true)}>Privacy Policy</Link>

                    <Modal isOpen={openModalTerms} onClose={() => setOpenModalTerms(false)}>
                        <Modal.Content maxWidth={'480px'}>
                            <Modal.CloseButton />
                            <Modal.Header>Terms & Conditions</Modal.Header>
                            <Modal.Body>
                                Terms & Conditions text
                            </Modal.Body>
                        </Modal.Content>
                    </Modal>

                    <Modal isOpen={openModalPrivacy} onClose={() => setOpenModalPrivacy(false)}>
                        <Modal.Content maxWidth={'480px'}>
                            <Modal.CloseButton />
                            <Modal.Header>Privacy Policy</Modal.Header>
                            <Modal.Body>
                                Privacy Policy text
                            </Modal.Body>
                        </Modal.Content>
                    </Modal>

                </HStack>
            </VStack>


            <Button _text={{
                bold: true,
                fontSize: 'md',
            }} height={60} rounded={'xl'} colorScheme={'orange'} width={'full'} shadow={'4'} onPress={handleSubmit(onSubmit)}>
                Sign Up
            </Button>

        </RegistrationLayout>
    );
};

export default RegisterScreen;
