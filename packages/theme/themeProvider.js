import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";

const DesignSystemTheme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export { DesignSystemTheme };