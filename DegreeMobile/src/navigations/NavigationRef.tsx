import { createNavigationContainerRef, StackActions } from '@react-navigation/native'
import React from 'react'

interface RefParams{
    name: any,
    params: object
}

export const navigationRef = createNavigationContainerRef<RefParams>();

export function navigate(name: any, params?: object){
    if(navigationRef.isReady()){
        navigationRef.navigate(name, params);
    }
}
