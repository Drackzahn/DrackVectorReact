import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { DrackTheme, SettingsContext } from "../../data/settings/SettingsContext";
import { ThemeProvider } from "@emotion/react";
import { Theme, createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

// TODO create more Themes
const greenTheme = createTheme({
    palette: {
        primary: {
            main: green[500]
        }
    }
})

const redTheme = createTheme({
    palette: {
        primary: {
            main: red[500]
        }
    }
})

export function DrackThemeProvider(props: PropsWithChildren) {
    const settings = useContext(SettingsContext);
    const [theme, setTheme] = useState<Theme>(greenTheme);

    useEffect(() => {
        switch (settings.selectedTheme) {
            case DrackTheme.green:
                setTheme(greenTheme);
                break;
            case DrackTheme.red:
                setTheme(redTheme);
                break;
        }
    }, [settings])

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}