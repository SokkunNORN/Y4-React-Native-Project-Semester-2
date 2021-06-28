import { createContext } from 'react'

let isDark = true

const AppContext = createContext({
    language: 'Englist',
    isDark: !isDark,
    auth: null
})

export default AppContext