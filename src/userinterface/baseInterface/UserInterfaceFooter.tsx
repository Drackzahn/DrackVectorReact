import {
  Settings,
  Wallpaper,
  Grass,
  DoorFront,
  Category,
  Visibility,
} from "@mui/icons-material";
import { Box, Paper, Switch, IconButton, Tabs, Tab } from "@mui/material";
import { SettingsView } from "../SettingsView";
import { useContext, useState } from "react";
import { DataContext } from "../../data/context/dataContext";
import { tabMenuEntries } from "./tabMenuEntries";

export function UserInterfaceFooter() {
  const dataContext = useContext(DataContext);

  const [isSettingsModalOpen, setIsSettingsModalOpen] =
    useState<boolean>(false);

  return (
    <Box padding={2}>
      <Box
        display="grid"
        gridTemplateAreas="'InterfaceSwitch Settings Tabs'"
        gridTemplateColumns="auto auto 1fr"
        columnGap={1}
        width="fit-content"
      >
        <Box gridArea="InterfaceSwitch" display="inline-block">
          <Paper
            sx={{
              height: "100%",
            }}
          >
            <Switch
              checked={dataContext!.isInterfaceVisible}
              onChange={(event) =>
                dataContext!.setIsInterfaceVisible(event.target.checked)
              }
            />
          </Paper>
        </Box>

        <Box gridArea="Settings">
          <Paper
            sx={{
              height: "100%",
            }}
          >
            <>
              <IconButton onClick={() => setIsSettingsModalOpen(true)}>
                <Settings />
              </IconButton>
              <SettingsView
                isOpen={isSettingsModalOpen}
                setIsOpen={setIsSettingsModalOpen}
              />
            </>
          </Paper>
        </Box>

        <Box
          gridArea="Tabs"
          visibility={dataContext!.isInterfaceVisible ? "visible" : "hidden"}
        >
          <Paper>
            <Tabs
              orientation="horizontal"
              variant="standard"
              value={dataContext!.selectedTab}
              onChange={dataContext!.changeSelectedTab}
            >
              <Tab
                icon={<Wallpaper />}
                tabIndex={tabMenuEntries.farBackground}
              />
              <Tab
                icon={<Grass />}
                tabIndex={tabMenuEntries.groundBackground}
              />
              <Tab
                icon={<DoorFront />}
                tabIndex={tabMenuEntries.middleBackground}
              />
              <Tab
                icon={<Category />}
                tabIndex={tabMenuEntries.backgroundItems}
              />
              <Tab
                icon={<Visibility />}
                tabIndex={tabMenuEntries.exportAndView}
              />
            </Tabs>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
