import React from 'react';
import { NativeBaseProvider, Text } from 'native-base';

export default function CurrentMission() {
    return (
        <NativeBaseProvider>
            <Text>
            Mission en cours
            </Text>
        </NativeBaseProvider>
    )
}