import { createContext } from 'react'

const AppContext = createContext({
    language: 'Englist',
    theme: 'light',
    auth: null
})

export default AppContext