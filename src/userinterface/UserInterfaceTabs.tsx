import { Card, CardContent, CardHeader, Divider, IconButton, Paper, Switch, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PropsWithChildren, useState } from "react";
import { BackgroundFarInterface } from "./background/BackgroundFarInterface";
import { BackgroundGroundInterface } from "./background/BackgroundGroundInterface";
import { Category, DoorFront, Grass, Settings, Visibility, Wallpaper } from "@mui/icons-material";
import { BackgroundSimpleItemInterface } from "./items/BackgroundSimpleItemInterface";
import { ExportAndViewInterface } from "./ExportAndViewInterface";
import { SettingsView } from "./SettingsView";

enum tabMenuEntries {
    farBackground = 0,
    groundBackground = 1,
    middleBackground = 2,
    backgroundItems = 3,
    exportAndView = 4
}

interface ITabPanelProps {
    index: number;
    value: number;
    header: string;
}

function TabPanel(props: PropsWithChildren<ITabPanelProps>) {
    const { children, value, index, header, ...other } = props;

    if (index !== value)
        return null;

    return (
        <Card
            variant="elevation"
            style={{
                display: 'block',
                height: '100%'
            }}
        >
            <CardHeader
                title={header} />
            <CardContent>
                <Box padding={2}>
                    {children}
                </Box>
            </CardContent>
        </Card>
    )
}

export function UserInterfaceTabs() {
    const [selectedValue, setSelectedValue] = useState<number>(0);
    const [isInterfaceVisible, setIsInterfaceVisible] = useState<boolean>(true);
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedValue(newValue);
    };

    return (
        <Box
            display="grid"
            gridTemplateAreas="'. OpenTab' 'Tabs Tabs'"
            gridTemplateColumns="1fr auto"
            gridTemplateRows="1fr auto"
            height="100%"
        >
            <Box
                gridArea="Tabs"
                margin={2}>
                <Box display="grid"
                    gridTemplateAreas="'InterfaceSwitch Settings Tabs'"
                    gridTemplateColumns="auto auto 1fr"
                    columnGap={1}>
                    <Box gridArea="InterfaceSwitch"
                        display="inline-block">
                        <Paper sx={{
                            height: "100%"
                        }}>
                            <Switch
                                checked={isInterfaceVisible}
                                onChange={(event) => setIsInterfaceVisible(event.target.checked)}
                            />
                        </Paper>
                    </Box>

                    <Box gridArea="Settings">
                        <Paper sx={{
                            height: "100%"
                        }}>
                            <>
                                <IconButton onClick={() => setIsSettingsModalOpen(true)}>
                                    <Settings />
                                </IconButton>
                                <SettingsView
                                    isOpen={isSettingsModalOpen}
                                    setIsOpen={setIsSettingsModalOpen} />
                            </>
                        </Paper>
                    </Box>

                    <Box gridArea="Tabs"
                        visibility={isInterfaceVisible ? "visible" : "hidden"}>
                        <Paper>
                            <Tabs
                                orientation="horizontal"
                                variant="standard"
                                value={selectedValue}
                                onChange={handleChange}>
                                <Tab icon={<Wallpaper />} tabIndex={tabMenuEntries.farBackground} />
                                <Tab icon={<Grass />} tabIndex={tabMenuEntries.groundBackground} />
                                <Tab icon={<DoorFront />} tabIndex={tabMenuEntries.middleBackground} />
                                <Tab icon={<Category />} tabIndex={tabMenuEntries.backgroundItems} />
                                <Tab icon={<Visibility />} tabIndex={tabMenuEntries.exportAndView} />
                            </Tabs>
                        </Paper>

                    </Box>
                </Box>
            </Box>

            <Box
                gridArea="OpenTab"
                alignContent="flex-end"
                padding={1}
                visibility={isInterfaceVisible ? "visible" : "hidden"}>
                <TabPanel value={selectedValue} index={tabMenuEntries.farBackground}
                    header="Background Far">
                    <BackgroundFarInterface />
                </TabPanel>
                <TabPanel value={selectedValue} index={tabMenuEntries.middleBackground}
                    header="Background Mid">
                    Middle
                </TabPanel>
                <TabPanel value={selectedValue} index={tabMenuEntries.groundBackground}
                    header="Background Ground">
                    <BackgroundGroundInterface />
                </TabPanel>
                <TabPanel value={selectedValue} index={tabMenuEntries.backgroundItems}
                    header="Background Items">
                    <BackgroundSimpleItemInterface />
                </TabPanel>
                <TabPanel value={selectedValue} index={tabMenuEntries.exportAndView}
                    header="Export and View">
                    <ExportAndViewInterface />
                </TabPanel>
            </Box>
        </Box>
    )
}