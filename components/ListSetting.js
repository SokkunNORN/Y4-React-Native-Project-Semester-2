import React from 'react'

import {
    StyleSheet
} from 'react-native'

import {
    List
} from 'react-native-paper'

import {
    COLORS, SIZES
} from '../constant'

const ListSetting = ({
  items = null,
  setSelectItem = () => {}
}) => {
    return (
        <>
            <List.Section>
                {
                    items.map(item => (
                        <List.Item
                            style={ styles.list }
                            titleStyle={ styles.title }
                            title={ item.title } 
                            left={() => <List.Icon color={ item.iconColor } icon={ item.icon } />}
                            right={() => <List.Icon style={ styles.iconRight } color={ COLORS.secondary1 } icon="chevron-right" />}
                        />
                    ))
                }
            </List.Section>
        </>
    )
}

export default ListSetting

const styles = StyleSheet.create({
    list: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: COLORS.primary,
        marginTop: SIZES.base(.3)
    },
    title: {
        color: COLORS.white
    },
    iconRight: {
        marginRight: 0
    }
})