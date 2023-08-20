import { ThemeProvider } from "styled-components";
import "../assets/fontawsome/css/all.css";

const theme = {
    color: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        font: 'var(--color-font)',
        warning: 'var(--color-warning)',
        darker: 'var(--color-contrast-darker)',
        dark: 'var(--color-contrast-dark)',
        light: 'var(--color-contrast-light)',
        black: 'var(--color-black)',
    },
    sizes: {
        xs: 'var(--sizes-xs)',
        sm: 'var(--sizes-sm)',
        med: 'var(--sizes-med)',
        lg: 'var(--sizes-lg)',
        xl: 'var(--sizes-xl)',
        xxl: 'var(--sizes-xxl)',

        card: 'var(--sizes-card)',
        borderRadius: 'var(--sizes-border-radius)',
    },
}

export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;