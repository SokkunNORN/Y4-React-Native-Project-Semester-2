import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import {
    List,
    Badge,
    Avatar
} from 'react-native-paper'

import {
    COLORS, SIZES
} from '../constant'

const ListChat = ({
  item = null,
  selectedItem = null,
  setSelectItem = () => {}
}) => {

    const navigation = useNavigation()

    return (
        <>
            <List.Item
                onPress={ () => navigation.push('ChatDetail') }
                style={ styles.list }
                titleStyle={ styles.title }
                descriptionStyle={ selectedItem == item ? styles.selected : styles.unselect }
                title={ item }
                description='Item description'
                left={ props => (
                    <View style={ styles.profile }>
                        <Avatar.Image size={60} source={require('../asset/profile.jpeg')} />
                    </View>
                )}
                right={ () => (
                    <View>
                        <Text style={ styles.timing }>6:47AM</Text>
                        <Text></Text>
                        <Badge style={{ backgroundColor: COLORS.white }}>2</Badge>
                    </View>
                )}
            />
        </>
    )
}

export default ListChat

const styles = StyleSheet.create({
    selected: {
        color: COLORS.secondary1
    },
    unselect: {
        color: COLORS.white
    },
    list: {
        backgroundColor: COLORS.primary,
        paddingLeft: SIZES.base(),
        paddingRight: SIZES.base(),
        borderBottomColor: COLORS.secondary1,
        borderBottomWidth: .167
    },
    title: {
        color: COLORS.white
    },
    profile: {
        backgroundColor: COLORS.secondary,
        height: 60,
        width: 60,
        borderRadius: 30
    },
    timing: {
        color: COLORS.secondary1
    }
})