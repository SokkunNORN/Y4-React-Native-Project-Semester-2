import React, { useState } from 'react'
import {
    ScrollView,
    StyleSheet
} from 'react-native'
import {
    List
} from 'react-native-paper'
import { COLORS, SIZES } from '../../constant'

const DarkMode = () => {

    const lists = ['On', 'Off', 'System']
    const [active, setActive] = useState(lists[0])

    return (
        <ScrollView
            showsHorizontalScrollIndicator={ false }
        >
            {
                lists.map(item => (
                    <List.Item
                        key={ item }
                        onPress={ () => setActive(item) }
                        style={ styles.list }
                        titleStyle={ styles.title_style }
                        title={ item }
                        right={ () =>
                            <List.Icon
                                color={ COLORS.warning }
                                icon={ active === item ? 'check-circle-outline' : '' }
                            />
                        }
                    />
                ))
            }
        </ScrollView>
    )
}

export default DarkMode

const styles = StyleSheet.create({
    list: {
        backgroundColor: COLORS.primary,
        marginBottom: SIZES.base(.1),
        paddingVertical: 0
    },
    title_style: {
        color: COLORS.white
    }
})