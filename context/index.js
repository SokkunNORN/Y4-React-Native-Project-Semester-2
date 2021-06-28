import { createContext } from 'react'

let isDark = true

const onChangeTheme = () => {
    isDark = !isDark
}

const AppContext = createContext({
    language: 'Englist',
    isDark: !isDark,
    auth: null,
    onChangeTheme: onChangeTheme()
})

export default AppContext