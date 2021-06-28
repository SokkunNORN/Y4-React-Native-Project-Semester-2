import { createContext } from 'react'

let isDarkTheme = false

const AppContext = createContext({
    language: 'Englist',
    isDark: isDarkTheme,
    auth: null
})

export default AppContext