import React from 'react'
import {
    ScrollView,
    StyleSheet
} from 'react-native'
import {
    Button
} from 'react-native-paper'
import { COLORS, SIZES } from '../constant'

const ListCategory = ({
    selected = {},
    categories = [],
    setSelectCategory = () => {}
}) => {
    return (
        <>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={ false }
                style={ styles.scroll }
            >
                {
                    categories.map((item, i) => (
                        <Button
                            key={ i }
                            color={ COLORS.white }
                            style={[
                                styles.list,
                                selected.title == item.title ? styles.seleted : styles.unselected,
                                i == (categories.length - 1) ? styles.marginEnd : {}
                            ]}
                            labelStyle={ styles.labelStyle }
                            uppercase={ false }
                            mode='outlined'
                            onPress={ 
                                () => selected.title != item.title ? setSelectCategory(item) : {} 
                            }>
                            { item.title }
                        </Button>
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
        width: SIZES.base(12),
        marginEnd: SIZES.base(1),
        height: SIZES.defaultHieghtTextField - 7,
        borderRadius: SIZES.radius(4)
    },
    seleted: {
        backgroundColor: COLORS.warning
    },
    unselected: {
        backgroundColor: COLORS.primary
    },
    marginEnd: {
        marginEnd: SIZES.base(4)
    },
    labelStyle: {
        fontSize: SIZES.font(),
        fontWeight: 'normal'
    }
})