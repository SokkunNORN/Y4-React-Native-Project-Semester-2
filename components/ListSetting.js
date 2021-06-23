import React from 'react'

import {
    StyleSheet
} from 'react-native'

import {
    List,
    Paragraph
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
                        item.title !== 'Version' ?
                        <List.Item
                            onPress={ () => setSelectItem(item) }
                            style={ styles.list }
                            titleStyle={ styles.title }
                            title={ item.title } 
                            left={() =>
                                <List.Icon
                                    style={[
                                        styles.icon_left,
                                        {
                                            borderColor: item.iconColor
                                        }
                                    ]} 
                                    color={ item.iconColor } 
                                    icon={ item.icon } />
                            }
                            right={() => 
                                <>
                                    <Paragraph style={[
                                        styles.rightTxt,
                                        !item.isIconRight && styles.rightTxtPadding
                                    ]}>{ item.rightTxt }</Paragraph>
                                    {

                                        item.isIconRight ? 
                                        <List.Icon
                                            style={ styles.iconRight }
                                            color={ COLORS.secondary1 }
                                            icon="chevron-right"
                                        /> : <></>
                                    }
                                </>
                            }
                        /> :
                        <List.Item
                            style={ styles.list }
                            titleStyle={ styles.title }
                            title={ item.title } 
                            left={() =>
                                <List.Icon
                                    style={[
                                        styles.icon_left,
                                        {
                                            borderColor: item.iconColor
                                        }
                                    ]} 
                                    color={ item.iconColor } 
                                    icon={ item.icon } />
                            }
                            right={() => 
                                <Paragraph style={[
                                    styles.rightTxt,
                                    !item.isIconRight && styles.rightTxtPadding
                                ]}>{ item.rightTxt }</Paragraph>
                            }
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
    },
    rightTxt: {
        color: COLORS.warning,
        paddingTop: SIZES.base()
    },
    rightTxtPadding: {
        marginRight: SIZES.base()
    },
    icon_left: {
        borderWidth: 1,
        borderRadius: SIZES.radius(1.4)
    }
})