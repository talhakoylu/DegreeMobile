import CustomContainer from '@components/CustomContainer';
import { IQuizPostModel } from '@models/IQuizPostModel';
import { Button, Heading, HStack, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import ImageLinks from '../../../assets/ImageLinks';

interface Props {
    data: IQuizPostModel;
    [key: string]: any;
}

const style = StyleSheet.create({
    coverImage: {
        minWidth: '100%',
        height: 160,
        borderRadius: 3,
    },
});

const DEFAULT_IMAGE = Image.resolveAssetSource(ImageLinks.default_image).uri;


const QuizPostItem: React.FC<Props> = ({ data, ...props }) => {
    const [uriImageError, setUriImageError] = useState(false);
    const { width } = useWindowDimensions();
    return (
        <CustomContainer>
            <VStack space={2} >
                <Image onError={() => setUriImageError(true)} source={{ uri: !uriImageError ? data.coverImage ? `http://localhost:8080/${data.coverImage}` : DEFAULT_IMAGE : DEFAULT_IMAGE }} resizeMode={'stretch'} style={style.coverImage} />

                <HStack justifyContent={'space-between'}>
                    <Text color={'gray.400'} fontSize={'xs'}>
                        <Text bold>{data.category.title}</Text> Category
                    </Text>
                    <Text color={'gray.400'} fontSize={'xs'}>
                        {new Date(data.createdAt).toDateString()}
                    </Text>
                </HStack>

                <Heading size={'md'} textAlign={'justify'}>
                    {data.title}
                </Heading>

                <RenderHtml source={{ html: data.description }} contentWidth={width} />

                <Button flex={1} colorScheme={'green'} _text={{
                    bold: true,
                    fontSize: 'md',
                }} onPress={() => props.navigation?.navigate('QuizPostQuestionsAnswers', { quizId: data._id, data: data?.questions })}>
                    Questions & Answers
                </Button>

                <Text color={'danger.400'} fontSize={'sm'} textAlign={'justify'}>
                    !!! You cannot create a game from the phone. If you want to create a game, please use your web browser. !!!
                </Text>
            </VStack>
        </CustomContainer>
    );
};

export default QuizPostItem;
