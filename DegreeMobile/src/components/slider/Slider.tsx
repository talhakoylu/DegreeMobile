import { Box, HStack, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react'
import SliderItem from './SliderItem';


const Slider: React.FC = () => {
    return (
        <VStack space={4} flex={1}>
            <Text fontSize={"md"} bold>
                Main Heading
            </Text>

            <Box height={130}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                   <HStack justifyContent={"space-between"} backgroundColor={"red.100"} paddingLeft={0}>
                   <SliderItem imageUri={'https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
                        heading="Quiz #1"
                    />
                    <SliderItem imageUri={'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
                        heading="Quiz #2"
                    />
                    <SliderItem imageUri={'https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
                        heading="Quiz #3"
                    />
                    <SliderItem imageUri={'https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
                        heading="Quiz #4"
                    />
                    <SliderItem imageUri={'https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
                        heading="Quiz #5"
                    />
                   </HStack>
                </ScrollView>

            </Box>
        </VStack>

    )
}




export default Slider;

