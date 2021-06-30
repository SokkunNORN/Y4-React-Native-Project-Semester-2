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
import { Greeting } from './screen'
import AppContext from './context'

const App = () => {

  const [isGreeting, setGreeting] = useState(true)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [chatBackgroundIndex, setChatBackgroundIndex] = useState(0)

  const onChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const onChangeChatBackground = index => {
    setChatBackgroundIndex(index)
  }

  useEffect(() => {
    setTimeout(() => {
      setGreeting(false)
    }, 1000)
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
        {
          isGreeting ? <Greeting /> : <Navigate />
        }
      </NavigationContainer>
    </AppContext.Provider>
  )
}

export default App;
