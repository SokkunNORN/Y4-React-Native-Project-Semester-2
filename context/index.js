import { createContext } from 'react'

const AppContext = createContext({
    language: 'Englist',
    isDark: true,
    auth: null
})

export default AppContext