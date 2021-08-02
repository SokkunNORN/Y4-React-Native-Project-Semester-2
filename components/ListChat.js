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
  auth = null,
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
                        descriptionStyle={{
                            color: participant.unseen_message <= 0 
                            ? COLORS.secondary1 
                            : isDark 
                            ? COLORS.secondary 
                            : COLORS.primary
                        }}
                        title={ participant.contact_profile.fname }
                        description={ 
                            participant.last_message.user.id == auth.id 
                            ? `You: ${ participant.last_message.message || '' }`
                            : `${ participant.last_message.message || '' }`
                        }
                        left={ () => (
                            <View style={ styles.profile }>
                                <Avatar.Image size={60} source={require('../asset/profile.jpeg')} />
                            </View>
                        )}
                        right={ () => (
                            <View>
                                <Text style={ styles.timing }>{ participant.last_message.created_at }</Text>
                                <Text></Text>
                                {
                                    participant.unseen_message > 0 ?
                                    <Badge
                                        style={{
                                            backgroundColor: isDark ? COLORS.white : COLORS.warning
                                        }}
                                    >
                                        { participant.unseen_message }
                                    </Badge> : null
                                }
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