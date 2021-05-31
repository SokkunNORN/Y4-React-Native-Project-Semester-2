import React from 'react'

import {
    StyleSheet
} from 'react-native'

import {
    List
} from 'react-native-paper'

import {
    COLORS
} from '../consts'

const ListChat = ({
  item = null,
  selectedItem = null,
  setSelectItem = () => {}
}) => {
    return (
        <>
            <List.Item
                key={ item }
                onPress={ () => setSelectItem(item) }
                style={ selectedItem == item ? styles.selected : styles.unselect }
                title={ item }
                description="Item description"
                left={props => <List.Icon {...props} icon="folder" />}
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
    }
})