import { useContext } from "react";
import { DrackTheme, SettingsContext } from "../data/settings/SettingsContext";
import { Box, FormControl, InputLabel, MenuItem, Modal, Paper, Select, SelectChangeEvent, Typography } from "@mui/material";

export interface ISettingsViewProps {
    isOpen: boolean;
    setIsOpen: (newValue: boolean) => void;
}

export function SettingsView(props: ISettingsViewProps) {
    const settings = useContext(SettingsContext);

    const handleThemeChange = (event: SelectChangeEvent) => {
        settings.setTheme(Number(event.target.value) as DrackTheme);
    }

    return (
        <Modal
            open={props.isOpen}
            onClose={() => props.setIsOpen(false)}

        >
            <Box display="grid"
                gridTemplateAreas="
                'Header'
                'Theme'
                "
                width="fit-content"
                height="fit-content"
                gap={4}
                position="absolute"
                top="20%"
                left="40%"
                sx={{
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4
                }}
            >
                <Box gridArea="Header">
                    <Typography variant="h3" color="black">Settings</Typography>
                </Box>
                <Box gridArea="Theme">
                    <FormControl>
                        <InputLabel>Theme</InputLabel>
                        <Select
                            value={settings.selectedTheme}
                            label="Theme"
                            onChange={handleThemeChange}>
                            <MenuItem value={DrackTheme.green}>Green</MenuItem>
                            <MenuItem value={DrackTheme.red}>Red</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Modal>
    )
}