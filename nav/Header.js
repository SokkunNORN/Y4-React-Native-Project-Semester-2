import React from 'react'
import {
    SafeAreaView,
    Platform,
    ScrollView
} from 'react-native'
import {
    Appbar
} from 'react-native-paper'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Header = (props) => {
    return (
        <>
            <SafeAreaView>
                <Appbar.Header>
                    <Appbar.Content title="ChatPlus" />
                    <Appbar.Action icon="magnify" onPress={() => {}} />
                    <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
                </Appbar.Header>
                <ScrollView>
                    { props.children }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Header
