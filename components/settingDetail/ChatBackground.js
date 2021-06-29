import React, { useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    View,
    ImageBackground,
    TouchableWithoutFeedback
} from 'react-native'
import { COLORS, SIZES } from '../../constant'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ChatBackground = () => {

    const images = [
        require('../../asset/chat_background/default.jpeg'),
        require('../../asset/chat_background/background1.jpeg'),
        require('../../asset/chat_background/background2.jpeg'),
        require('../../asset/chat_background/background3.jpeg'),
        require('../../asset/chat_background/background4.jpeg'),
        require('../../asset/chat_background/background5.jpeg'),
        require('../../asset/chat_background/background6.jpeg'),
        require('../../asset/chat_background/background7.jpeg'),
        require('../../asset/chat_background/background8.jpeg')
    ]
    const [active, setActive] = useState(0)

    return (
        <ScrollView
            showsVerticalScrollIndicator={ false }
        >
            <View style={ styles.container }>
                {
                    images.map((img, index) => (
                        <TouchableWithoutFeedback
                            onPress={ () => setActive(index) }
                        >
                            <View style={[
                                styles.box,
                                {
                                    marginBottom: index === (images.length - 1) ? 
                                    SIZES.base(4) : SIZES.base(1)
                                }
                            ]}>
                                <ImageBackground
                                    style={ styles.inner }
                                    imageStyle={ styles.inner }
                                    source={ img }
                                >
                                    {
                                        active === index ?
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