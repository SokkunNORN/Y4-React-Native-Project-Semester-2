/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigate from './nav'
import AppContext from './context'
import { getChatBackgroundAppIndex, getThemeApp, setChatBackgroundAppIndex, setThemeApp } from './utils'

const App = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [chatBackgroundIndex, setChatBackgroundIndex] = useState(0)

  const onChangeTheme = () => {
    const isDark = !isDarkTheme
    setIsDarkTheme(isDark)

    setThemeApp(isDark)
  }

  const onChangeChatBackground = index => {
    setChatBackgroundIndex(index)

    setChatBackgroundAppIndex(index)
  }

  const getTheme = async () => {
    const theme = await getThemeApp()

    setIsDarkTheme(theme)
  }

  const getChatBackgroundIndex = async () => {
    const i = await getChatBackgroundAppIndex()

    setChatBackgroundIndex(i)
  }

  useEffect(() => {
    getTheme()
    getChatBackgroundIndex()
  }, [])

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
