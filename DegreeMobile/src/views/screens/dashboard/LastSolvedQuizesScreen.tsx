import React, { useState } from 'react'
import {Text, } from 'native-base';
import StandardLayout from '@views/layouts/StandardLayout';
import * as RootNavigation from '@navigations/NavigationRef';

const LastSolvedQuizesScreen: React.FC = () => {
    return (
        <StandardLayout>
            <Text>
                LAST SOLVED QUIZES
            </Text>
        </StandardLayout>
    )
}

export default LastSolvedQuizesScreen;