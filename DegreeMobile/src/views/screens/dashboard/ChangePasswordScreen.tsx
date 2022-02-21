import React, { useState } from 'react'
import {Text, } from 'native-base';
import StandardLayout from '@views/layouts/StandardLayout';
import * as RootNavigation from '@navigations/NavigationRef';

const ChangePasswordScreen: React.FC = () => {
    return (
        <StandardLayout>
            <Text>
                CHANGE PASSWORD
            </Text>
        </StandardLayout>
    )
}

export default ChangePasswordScreen;