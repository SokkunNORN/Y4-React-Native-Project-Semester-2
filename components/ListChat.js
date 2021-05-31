import React from 'react'

import {
    StyleSheet
} from 'react-native'

import {
    List
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
                style={[
                    selectedItem == item ? styles.selected : styles.unselect,
                    styles.list
                ]}
                title={ item }
                description="Item description"
                left={props => <List.Icon {...props} icon="car" />}
            />
        </>
    )
}

export default ListChat

const styles = StyleSheet.create({
    selected: {
        backgroundColor: COLORS.secondary
    },
    unselect: {
        backgroundColor: COLORS.white
    },
    list: {
        marginLeft: SIZES.base(1),
        marginRight: SIZES.base(1),
        marginTop: SIZES.base(.25),
        marginBottom: SIZES.base(.25),
        padding: (SIZES.base(), SIZES.base()),
        borderRadius: SIZES.radius(SIZES.base())
    }
})