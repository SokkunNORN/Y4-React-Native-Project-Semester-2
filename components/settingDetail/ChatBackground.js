import React from 'react'
import {
    ScrollView,
    StyleSheet,
    View,
    ImageBackground,
    TouchableWithoutFeedback
} from 'react-native'
import { COLORS, SIZES, CHAT_BACKGROUND } from '../../constant'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AppContext from '../../context'

const ChatBackground = () => {

    return (
        <AppContext.Consumer>
            {
                ({ 
                    chatBackgroundIndex, 
                    onChangeChatBackground 
                }) =>
                <ScrollView
                    showsVerticalScrollIndicator={ false }
                >
                    <View style={ styles.container }>
                        {
                            CHAT_BACKGROUND.map((img, index) => (
                                <TouchableWithoutFeedback
                                    onPress={ () => onChangeChatBackground(index) }
                                >
                                    <View style={[
                                        styles.box,
                                        {
                                            marginBottom: index === (CHAT_BACKGROUND.length - 1) ? 
                                            SIZES.base(4) : SIZES.base(1)
                                        }
                                    ]}>
                                        <ImageBackground
                                            style={ styles.inner }
                                            imageStyle={ styles.inner }
                                            source={ img }
                                        >
                                            {
                                                chatBackgroundIndex === index ?
                                                <Icon 
                                                    name='check-circle-outline'
                                                    size={ SIZES.base(4) }
                                                    color={ COLORS.warning }
                                                    style={ styles.check_icon }
                                                /> :
                                                <></>
                                            }
                                        </ImageBackground>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))
                        }
                    </View>
                </ScrollView>
            }
        </AppContext.Consumer>
    )
}

export default ChatBackground

const styles = StyleSheet.create({
    container: {
        width: 100 + '%',
        height: 100 + '%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: SIZES.base(.5)
    },
    box: {
        width: 50 + '%',
        height: SIZES.width * .75,
        paddingHorizontal: SIZES.base(.5)
    },
    inner: {
        flex: 1,
        width: '100%',
        backgroundColor: '#eee',
        alignItems: 'flex-end',
        borderRadius: 10
    },
    check_icon: {
        padding: SIZES.base(1)
    }
})