import React from 'react'
import {
    ScrollView,
    StyleSheet
} from 'react-native'
import {
    Button
} from 'react-native-paper'
import { COLORS, SIZES } from '../constant'
import AppContext from '../context'

const ListCategory = ({
    selected = {},
    categories = [],
    setSelectCategory = () => {}
}) => {
    return (
        <AppContext.Consumer>
            {
                ({ isDark }) =>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                    style={[
                        styles.scroll,
                        {
                            backgroundColor: isDark ? COLORS.dark : COLORS.light_gray
                        }
                    ]}
                >
                    {
                        categories.map((item, i) => (
                            <Button
                                key={ i }
                                color={ COLORS.white }
                                style={[
                                    styles.list,
                                    selected.title == item.title ? styles.seleted : 
                                    {
                                        backgroundColor: isDark ? COLORS.primary : COLORS.secondary
                                    },
                                    i == (categories.length - 1) ? styles.marginEnd : {}
                                ]}
                                labelStyle={[
                                    styles.labelStyle,
                                    {
                                        color: selected.title == item.title || isDark ? COLORS.white : COLORS.black
                                    }
                                ]}
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
            }
        </AppContext.Consumer>
    )
}

export default ListCategory

const styles = StyleSheet.create({
    scroll: {
        paddingLeft: SIZES.base(),
        paddingVertical: SIZES.base()
    },
    list: {
        width: SIZES.base(12),
        marginEnd: SIZES.base(1),
        height: SIZES.defaultHieghtTextField - 7,
        borderRadius: SIZES.radius(4),
        borderWidth: 0
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