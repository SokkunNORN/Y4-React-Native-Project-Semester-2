import React from 'react'

import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import {
    List,
    Badge
} from 'react-native-paper'

import {
    COLORS, SIZES
} from '../consts'

const ListChat = ({
  item = null,
  selectedItem = null,
  setSelectItem = () => {}
}) => {
    return (
        <>
            <List.Item
                onPress={ () => setSelectItem(item) }
                style={ styles.list }
                titleStyle={ styles.title }
                descriptionStyle={ selectedItem == item ? styles.selected : styles.unselect }
                title={ item }
                description='Item description'
                left={ props => (
                    <View style={ styles.profile }>
                        <List.Icon {...props} icon="car" />
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
        borderBottomWidth: .167,
        height: 67
    },
    title: {
        color: COLORS.white
    },
    profile: {
        backgroundColor: COLORS.secondary,
        height: 50,
        width: 50,
        borderRadius: 25
    },
    timing: {
        color: COLORS.secondary1
    }
})