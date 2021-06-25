import { createContext } from 'react'

const AppContext = createContext({
    language: 'Englist',
    isDark: false,
    auth: null
})

export default AppContext