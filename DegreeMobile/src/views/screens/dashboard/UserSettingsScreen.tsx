import React, { useState } from 'react'
import {Text, } from 'native-base';
import StandardLayout from '@views/layouts/StandardLayout';
import * as RootNavigation from '@navigations/NavigationRef';

const UserSettingsScreen: React.FC = () => {
    return (
        <StandardLayout>
            <Text>
                USER SETTINGS
            </Text>
        </StandardLayout>
    )
}

export default UserSettingsScreen;