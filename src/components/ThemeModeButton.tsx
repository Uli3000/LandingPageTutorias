import { IconButton } from '@mui/material'
import { useTheme } from '../store/theme'
import { Brightness4, Brightness7 } from '@mui/icons-material'

export const ThemeModeButton = () => {
    const theme = useTheme(state => state.mode)
    const toggleTheme = useTheme(state => state.toggleThemeMode)
    return (
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
            {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    )
}