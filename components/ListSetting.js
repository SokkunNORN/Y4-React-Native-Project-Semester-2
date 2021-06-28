import React from 'react'

import {
    StyleSheet
} from 'react-native'

import AppContext from '../context'

import {
    List,
    Paragraph,
    Switch
} from 'react-native-paper'

import {
    COLORS, HexToRGB, SIZES
} from '../constant'

const ListSetting = ({
  items = null,
  setSelectItem = () => {}
}) => {
    return (

        <AppContext.Consumer>
            {
                ({ 
                    isDark
                }) =>
                <List.Section>
                    {
                        items.map(item => (
                            item.title !== 'Version' && item.title !== 'Dark Mode' ?
                            <List.Item
                                onPress={ () => setSelectItem(item) }
                                style={[
                                    styles.list,
                                    {
                                        backgroundColor: isDark ? COLORS.primary : COLORS.white
                                    }
                                ]}
                                titleStyle={[
                                    {
                                        color: isDark ? COLORS.white : COLORS.black
                                    }
                                ]}
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
                            item.title === 'Version' ?
                            <List.Item
                                style={[
                                    styles.list,
                                    {
                                        backgroundColor: isDark ? COLORS.primary : COLORS.white
                                    }
                                ]}
                                titleStyle={[
                                    {
                                        color: isDark ? COLORS.white : COLORS.black
                                    }
                                ]}
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
                            /> :
                            <List.Item
                                style={[
                                    styles.list,
                                    {
                                        backgroundColor: isDark ? COLORS.primary : COLORS.white
                                    }
                                ]}
                                titleStyle={[
                                    {
                                        color: isDark ? COLORS.white : COLORS.black
                                    }
                                ]}
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
                                    <Switch 
                                        style={[
                                            styles.rightTxtPadding,
                                            {
                                                marginTop: SIZES.base(1.5)
                                            }
                                        ]}
                                        color={ COLORS.dark }
                                        value={ isDark } 
                                        onValueChange={ () => {} }
                                    />
                                }
                            />
                        ))
                    }
                </List.Section>
            }
        </AppContext.Consumer>
    )
}

export default ListSetting

const styles = StyleSheet.create({
    list: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: COLORS.primary,
        borderColor: HexToRGB(COLORS.secondary1, .2),
        borderWidth: .2
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