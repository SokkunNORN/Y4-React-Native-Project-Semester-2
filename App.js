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
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const onChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
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
        isDark: !isDarkTheme,
        auth: null,
        onChangeTheme: () => onChangeTheme()
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
