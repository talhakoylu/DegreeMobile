import { Box, HStack, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react'
import SliderItem from './SliderItem';

interface Props {
    heading?: string;
    description?: string;
    [key: string]: any;
}

const headingDefault = "Last Created Quizzes"
const descriptionDefault = "You can see the details of the last 5 quizzes added by other people by clicking on them."

const Slider: React.FC<Props> = ({ heading = headingDefault, description = descriptionDefault, ...props }) => {
    return (
        <VStack space={2} {...props}>
            <Text fontSize={"md"} bold>
                {heading}
            </Text>
            <Text fontSize={"xs"} color={"gray.400"}>
                {description}
            </Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <HStack space={3} justifyContent={"space-between"} >
                    <SliderItem imageUri={'https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg'}
                        heading="Engineering Concepts & the Pikachu Universe" quizId={4}
                    />
                    <SliderItem imageUri={'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg'}
                        heading="Quiz #2" quizId={4}
                    />
                    <SliderItem imageUri={'https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
                        heading="Quiz #3" quizId={4}
                    />
                    <SliderItem imageUri={'https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
                        heading="Quiz #4" quizId={4}
                    />
                    <SliderItem imageUri={'https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
                        heading="Quiz #5" quizId={4}
                    />
                </HStack>
            </ScrollView>
        </VStack>

    )
}




export default Slider;

