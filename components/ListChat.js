import React from 'react'

import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import {
    List,
    Badge,
    Avatar
} from 'react-native-paper'

import {
    COLORS, HexToRGB, SIZES
} from '../constant'
import AppContext from '../context'

const ListChat = ({
  participant = null,
  selectParticipant = () => {}
}) => {
    return (
        <AppContext.Consumer>
            {
                ({ isDark }) =>
                <>
                    <List.Item
                        onPress={ () => selectParticipant(participant) }
                        style={[
                            styles.list,
                            {
                                backgroundColor: isDark ? COLORS.primary : COLORS.white
                            }
                        ]}
                        titleStyle={[
                            styles.title,
                            {
                                color: isDark ? COLORS.white : COLORS.black
                            }
                        ]}
                        descriptionStyle={[
                            styles.selected
                        ]}
                        title={ participant.contact.fname }
                        description={ participant.last_massage.message }
                        left={ props => (
                            <View style={ styles.profile }>
                                <Avatar.Image size={60} source={require('../asset/profile.jpeg')} />
                            </View>
                        )}
                        right={ () => (
                            <View>
                                <Text style={ styles.timing }>{ participant.last_massage.created_at }</Text>
                                <Text></Text>
                                <Badge
                                    style={{
                                        backgroundColor: isDark ? COLORS.white : COLORS.warning
                                    }}
                                >
                                    2
                                </Badge>
                            </View>
                        )}
                    />
                </>
            }
        </AppContext.Consumer>
    )
}

export default ListChat

const styles = StyleSheet.create({
    selected: {
        color: COLORS.secondary1
    },
    list: {
        backgroundColor: COLORS.primary,
        paddingLeft: SIZES.base(),
        paddingRight: SIZES.base(),
        borderBottomColor: HexToRGB(COLORS.secondary1, .3),
        borderBottomWidth: .167
    },
    title: {
        color: COLORS.white
    },
    profile: {
        backgroundColor: COLORS.secondary,
        height: 60,
        width: 60,
        borderRadius: 30
    },
    timing: {
        color: COLORS.secondary1
    }
})