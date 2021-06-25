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

const App = () => {

  const [isGreeting, setGreeting] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setGreeting(false)
    }, 1000)
  }, [])

  return (
    <>
      <NavigationContainer>
        {
          isGreeting ? <Greeting /> : <Navigate />
        }
      </NavigationContainer>
    </>
  )
}

export default App;
