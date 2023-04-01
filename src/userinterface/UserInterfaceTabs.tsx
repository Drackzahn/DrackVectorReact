import { Card, CardContent, CardHeader, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PropsWithChildren, useState } from "react";
import { BackgroundFarInterface } from "./background/BackgroundFarInterface";
import { BackgroundGroundInterface } from "./background/BackgroundGroundInterface";

enum tabMenuEntries {
    farBackground = 0,
    middleBackground = 1,
    groundBackground = 2
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
            variant="elevation">
            <CardHeader
                title={header} />
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

export function UserInterfaceTabs() {

    const [selectedValue, setSelectedValue] = useState<number>(0);

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
                <Tabs
                    orientation="horizontal"
                    variant="standard"
                    value={selectedValue}
                    onChange={handleChange}>
                    <Tab label="Background Far" tabIndex={tabMenuEntries.farBackground} />
                    <Tab label="Background Mid" tabIndex={tabMenuEntries.groundBackground} />
                    <Tab label="Background Ground" tabIndex={tabMenuEntries.middleBackground} />
                </Tabs>
            </Box>

            <Box
                gridArea="OpenTab"
                alignContent="flex-end"
                padding={2}>
                <TabPanel value={selectedValue} index={tabMenuEntries.farBackground}
                    header="Background Far">
                    <BackgroundFarInterface />
                </TabPanel>
                <TabPanel value={selectedValue} index={tabMenuEntries.groundBackground}
                    header="Background Ground">
                    <BackgroundGroundInterface />
                </TabPanel>
                <TabPanel value={selectedValue} index={tabMenuEntries.middleBackground}
                    header="Background Mid">
                    Middle
                </TabPanel>
            </Box>
        </Box>
    )
}