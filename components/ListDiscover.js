import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import {
    Card,
    Title,
    Paragraph,
    Button
} from 'react-native-paper'
import { 
    SIZES, 
    Rounder, 
    COLORS
} from '../constant'
import AppContext from '../context'

const ListDiscover = ({
    item = {}
}) => {
    return (
        <AppContext.Consumer>
            {
                ({ isDark }) =>
                <Card
                    style={[
                        styles.contain,
                        {
                            backgroundColor: isDark ? COLORS.primary : COLORS.white
                        }
                    ]}
                >
                    <Card.Cover
                        source={ require('../asset/feature.jpeg') }
                        style={[
                            styles.image_news,
                            Rounder(SIZES.base(5))
                        ]}
                    />
                    <View style={ styles.view_news }>
                        <Text style={ styles.para }>{ item.category.title }</Text>
                        <Title style={[
                            styles.title,
                            {
                                color: isDark ? COLORS.secondary : COLORS.black
                            }
                        ]} numberOfLines={ 1 }>{ item.title }</Title>
                        <Text style={ styles.para } numberOfLines={ 2 }>{ item.content }</Text>
                    </View>
    
                    <View style={[
                        styles.view_profile,
                        {
                            backgroundColor: isDark ? COLORS.primary1 : COLORS.secondary
                        }
                    ]}>
                        <Card.Cover
                            style={[
                                styles.logo_slide,
                                {
                                    backgroundColor: isDark ? COLORS.primary1 : null
                                }
                            ]}
                        />
                        <View style={ styles.title_profile }>
                            <Paragraph style={ styles.name_profile } numberOfLines={ 1 }>{ item.profile.name }</Paragraph>
                        </View>
    
                        <Button
                            disabled={ item.isJoined }
                            icon={ item.isJoined ? 'check-circle' : null }
                            style={[
                                styles.joined_btn,
                                !item.isJoined ? styles.join_btn : isDark ? {} :
                                {
                                    backgroundColor: COLORS.light_gray
                                }
                            ]}
                            labelStyle={[
                                styles.label_style,
                                item.isJoined ? {} : styles.label_join_btn
                            ]}
                            uppercase={ false }
                            mode='outlined'
                            onPress={() => {}}>
                            Joined
                        </Button>
                    </View>
                </Card>
            }
        </AppContext.Consumer>
    )
}

export default ListDiscover

const styles = StyleSheet.create({
    contain: {
        marginBottom: SIZES.base(),
        marginStart: SIZES.base(),
        marginEnd: SIZES.base(),
        borderRadius: SIZES.base(),
        backgroundColor: COLORS.primary,
        padding: SIZES.base(1.2),
        width: SIZES.width - SIZES.base(4)
    },
    image_news: {
        marginStart: SIZES.base(.5),
        marginTop: SIZES.base(.5),
        borderTopLeftRadius: SIZES.base(12),
        borderTopRightRadius: SIZES.base(12)
    },
    view_news: {
        marginTop: -SIZES.base(5),
        marginStart: SIZES.base(7),
        marginEnd: SIZES.base(.5)
    },
    title: {
        color: COLORS.secondary
    },
    para: {
        color: COLORS.secondary1
    },
    view_profile: {
        backgroundColor: COLORS.primary1,
        marginStart: -SIZES.base(1.2),
        marginTop: SIZES.base(),
        marginEnd: -SIZES.base(1.2),
        marginBottom: -SIZES.base(1.5),
        borderBottomLeftRadius: SIZES.base(),
        borderBottomRightRadius: SIZES.base()
    },
    logo_slide: {
        height: SIZES.base(7),
        borderBottomRightRadius: SIZES.base(1.5),
        borderBottomLeftRadius: SIZES.base(1.5)
    },
    title_profile: {
        position: 'absolute',
        marginStart: SIZES.base(),
        width: SIZES.width - (SIZES.base(28)),
        height: SIZES.base(4),
        marginTop: SIZES.base(1.8)
    },
    name_profile: {
        color: COLORS.secondary1
    },
    joineder: {
        color: COLORS.secondary1,
        marginTop: -SIZES.base(1)
    },
    joined_btn: {
        position: 'absolute',
        marginTop: SIZES.base(1.2),
        borderRadius: SIZES.radius(4),
        backgroundColor: COLORS.dark,
        width: SIZES.base(13),
        marginLeft: SIZES.width - (SIZES.base(19))
    },
    label_style: {
        fontSize: SIZES.font(),
        fontWeight: 'normal',
        color: COLORS.secondary1
    },
    join_btn: {
       backgroundColor: COLORS.warning 
    },
    label_join_btn: {
        color: COLORS.white
    }
})