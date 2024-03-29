import * as RootNavigation from '@navigations/NavigationRef';
import { Box, Pressable } from 'native-base';
import React, { useState } from 'react';
import { Image as ReactImage, StyleSheet } from 'react-native';
import ImageLinks from '../../../assets/ImageLinks';

interface Props {
    imageUri: string;
    heading: string;
    quizId: number;
    [key: string]: any;
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 250,
        height: 150,
    },
});

const DEFAULT_IMAGE = ReactImage.resolveAssetSource(ImageLinks.default_image).uri;

const SliderItem: React.FC<Props> = ({ imageUri, heading, quizId, ...props }) => {
    const [imageUriError, setImageUriError] = useState(false);

    return (
        <Pressable onPress={() => RootNavigation.navigate('QuizPostDetail', { quizId: quizId })}>
            <Box borderRadius={'md'} height={150} overflow={'hidden'} {...props}>
                {/* <Image source={{ uri: uri }} alt={heading} size={'2xl'} resizeMode={'cover'} defaultSource={ImageLinks.default_image} onError={() => setImageUriError(true)} /> */}

                <ReactImage
                    onError={()=> setImageUriError(true)}
                    style={styles.tinyLogo}
                    source={{
                        uri: !imageUriError ? imageUri ? imageUri : DEFAULT_IMAGE : DEFAULT_IMAGE,
                    }}
                    resizeMode={'stretch'}
                />

                <Box position={'absolute'} height={'full'} width={'full'} _text={{
                    noOfLines: 2,
                    color: 'white',
                    fontSize: 'sm',
                    bold: true,
                    flex: 1,
                    bottom: 4,
                    left: 5,
                    right: 5,
                    position: 'absolute',
                }} bg={{
                    linearGradient: {
                        colors: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.05)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)', 'dark.50'],
                        start: [0, 0],
                        end: [0, 1],
                    },
                }}>
                    {heading}
                </Box>
            </Box>
        </Pressable>
    );
};


export default SliderItem;
