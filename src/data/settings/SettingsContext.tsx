import { PropsWithChildren, createContext, useState } from "react"

export enum DrackTheme {
    green = "Green"
}

export interface ISettings {
    selectedTheme: DrackTheme,
    setTheme: (newTheme: DrackTheme) => void;
}

export const SettingsContext = createContext<ISettings>({
    selectedTheme: DrackTheme.green,
    setTheme: (newTheme: DrackTheme) => { }
})

export function SettingsContextWrapper(props: PropsWithChildren) {
    const [selectedTheme, setSelectedTheme] = useState<DrackTheme>(DrackTheme.green)

    return (
        <SettingsContext.Provider value={{
            selectedTheme,
            setTheme: setSelectedTheme
        }}>
            {props.children}
        </SettingsContext.Provider>
    )
}