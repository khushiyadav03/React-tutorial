import { createContext, useContext} from 'react';

// Default context shape batata hai consumer ko kaunsi values/functions milenge.
export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    // Custom hook se har component me useContext repeat nahi karna padta.
    return useContext(ThemeContext);
}
