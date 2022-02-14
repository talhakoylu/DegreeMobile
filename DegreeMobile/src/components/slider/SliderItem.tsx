import { Box, Image, Text, View } from 'native-base';
import React from 'react'

interface Props {
    imageUri: string;
    heading: string;
    [key: string]: any;
}

const SliderItem: React.FC<Props> = ({imageUri, heading, ...props}) => {
    return (
        <Box style={{ height: 130, width: 130, borderWidth: 0.5, borderColor: '#ddddd', borderRadius: 10 }} {...props}>
            <View style={{ flex: 2 }}>
                <Image source={{uri: imageUri}} alt={heading}
                    style={{ flex: 1, width: 0.1, height: 0.1, resizeMode: 'cover' }}
                />
            </View>

            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                <Text style={{ fontSize: 12, fontWeight: '700' }}>
                    {heading}
                </Text>
            </View>
        </Box>
    )
}


export default SliderItem;