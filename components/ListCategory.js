import React from 'react'
import {
    ScrollView,
    StyleSheet
} from 'react-native'
import {
    List
} from 'react-native-paper'
import { COLORS, SIZES } from '../constant'

const ListCategory = ({
    selected = {},
    categories = [],
    setSelectCategory = () => {}
}) => {
    return (
        <>
            <ScrollView horizontal style={ styles.scroll }>
                {
                    categories.map(item => (
                        <List.Item
                            onPress={ () => setSelectCategory(item) }
                            title={ item.title }
                            titleStyle={ styles.title }
                            style={[
                                styles.list,
                                selected.title == item.title ? styles.seleted : styles.unselected
                            ]}
                        />
                    ))
                }
            </ScrollView>
        </>
    )
}

export default ListCategory

const styles = StyleSheet.create({
    scroll: {
        paddingLeft: SIZES.base()
    },
    list: {
        paddingStart: SIZES.base(),
        paddingEnd: SIZES.base(3),
        marginEnd: SIZES.base(1),
        height: SIZES.defaultHieghtTextField + SIZES.base() - 10,
        borderRadius: SIZES.radius(4)
    },
    seleted: {
        backgroundColor: COLORS.warning
    },
    unselected: {
        backgroundColor: COLORS.primary
    },
    title: {
        color: COLORS.white
    }
})