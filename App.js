/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigate from './nav'
import AppContext from './context'

const App = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [chatBackgroundIndex, setChatBackgroundIndex] = useState(0)

  const onChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const onChangeChatBackground = index => {
    setChatBackgroundIndex(index)
  }

  return (
    <AppContext.Provider
      value={{
        language: 'Englist',
        isDark: isDarkTheme,
        chatBackgroundIndex: chatBackgroundIndex,
        auth: null,
        onChangeTheme: () => onChangeTheme(),
        onChangeChatBackground: index => onChangeChatBackground(index)
      }}
    >
      <NavigationContainer>
        <Navigate />
      </NavigationContainer>
    </AppContext.Provider>
  )
}

export default App;
