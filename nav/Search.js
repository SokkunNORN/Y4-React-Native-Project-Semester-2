import React from 'react';

import {
    Animated,
    StyleSheet,
    View
} from 'react-native'
import {
    Searchbar
} from 'react-native-paper'

import { COLORS, SIZES } from '../consts'

const Search = (props) => {
  const {
    clampedScroll
  } = props;
  const searchBarTranslate = clampedScroll.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -(250)],
    extrapolate: 'clamp',
  });
  const searchBarOpacity = clampedScroll.interpolate({
    inputRange: [0, 10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View style={[
      styles.container,
      {
        transform: [
          {
            translateY: searchBarTranslate
          }
        ],
        opacity: searchBarOpacity,
      }
    ]}>
        <View style={ styles.bankground }>
            <Searchbar
                placeholder="Search"
                onChangeText={() => {}}
                value={null}
                style={styles.formField}
                color={COLORS.white}
                fontSize={SIZES.font()}
                placeholderTextColor={COLORS.secondary1}
                iconColor={COLORS.secondary1}
            />
        </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    width: SIZES.width,
    zIndex: 99,
    backgroundColor: COLORS.dark
  },
  formField: {
    borderWidth: .167,
    borderColor: COLORS.secondary1,
    borderRadius: SIZES.radius(1),
    marginLeft: SIZES.base(),
    marginRight: SIZES.base(),
    marginBottom: SIZES.base(1),
    backgroundColor: COLORS.primary,
    tintColor: COLORS.white,
    color: COLORS.white,
    height: SIZES.customHiegthTextField(8),
  }
})

export default Search;