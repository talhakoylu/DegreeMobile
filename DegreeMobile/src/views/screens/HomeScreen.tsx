import CustomContainer from '@components/CustomContainer'
import Slider from '@components/slider/Slider'
import StandardLayout from '@views/layouts/StandardLayout'
import { ScrollView } from 'native-base'
import React from 'react'



const HomeScreen: React.FC = () => {


    return (
        <ScrollView>
            <StandardLayout>
                <CustomContainer>
                    <Slider>

                    </Slider>
                </CustomContainer>
            </StandardLayout>
        </ScrollView>

    )
}

export default HomeScreen;