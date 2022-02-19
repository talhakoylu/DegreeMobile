import React from 'react'
import { Box, Button, Fab, Icon, Popover, ScrollView, Text } from 'native-base';
import StandardLayout from '@views/layouts/StandardLayout';
import * as RootNavigation from '@navigations/NavigationRef';

const DashboardHomeScreen: React.FC = ({ ...props }) => {
    return (
        <StandardLayout>
            <Text>xd</Text>
            <Button onPress={() => RootNavigation.navigate("DashboardSettings")}>Dashboard Settings</Button>
        </StandardLayout>
    )
}

export default DashboardHomeScreen