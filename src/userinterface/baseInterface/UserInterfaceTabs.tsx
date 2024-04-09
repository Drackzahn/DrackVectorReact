import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { PropsWithChildren, useContext } from "react";
import { BackgroundFarInterface } from "../background/BackgroundFarInterface";
import { BackgroundGroundInterface } from "../background/BackgroundGroundInterface";
import { BackgroundSimpleItemInterface } from "../items/BackgroundSimpleItemInterface";
import { ExportAndViewInterface } from "../ExportAndViewInterface";
import { DataContext } from "../../data/context/dataContext";
import { tabMenuEntries } from "./tabMenuEntries";
import { FiguresBaseInterface } from "../figures/FiguresBaseInterface";

interface ITabPanelProps {
  index: number;
  value: number;
  header: string;
}

function TabPanel(props: PropsWithChildren<ITabPanelProps>) {
  const { children, value, index, header, ...other } = props;

  if (index !== value) return null;

  return (
    <Card
      variant="elevation"
      style={{
        display: "block",
        height: "100%",
      }}
    >
      <CardHeader title={header} />
      <CardContent>
        <Box padding={2}>{children}</Box>
      </CardContent>
    </Card>
  );
}

export function UserInterfaceTabs() {
  const dataContext = useContext(DataContext);

  return (
    <Box
      display="grid"
      alignContent="stretch"
      justifyContent="stretch"
      paddingTop={1}
      paddingRight={1}
      paddingBottom={4}
      visibility={dataContext!.isInterfaceVisible ? "visible" : "hidden"}
    >
      <TabPanel
        value={dataContext!.selectedTab}
        index={tabMenuEntries.farBackground}
        header="Background Far"
      >
        <BackgroundFarInterface />
      </TabPanel>
      <TabPanel
        value={dataContext!.selectedTab}
        index={tabMenuEntries.middleBackground}
        header="Background Mid"
      >
        Middle
      </TabPanel>
      <TabPanel
        value={dataContext!.selectedTab}
        index={tabMenuEntries.groundBackground}
        header="Background Ground"
      >
        <BackgroundGroundInterface />
      </TabPanel>
      <TabPanel
        value={dataContext!.selectedTab}
        index={tabMenuEntries.backgroundItems}
        header="Background Items"
      >
        <BackgroundSimpleItemInterface />
      </TabPanel>
      <TabPanel
        value={dataContext!.selectedTab}
        index={tabMenuEntries.humanoidFigures}
        header="Figures"
      >
        <FiguresBaseInterface />
      </TabPanel>
      <TabPanel
        value={dataContext!.selectedTab}
        index={tabMenuEntries.exportAndView}
        header="Export and View"
      >
        <ExportAndViewInterface />
      </TabPanel>
    </Box>
  );
}
