import { Tabs } from "@mui/material";
import { PropsWithChildren } from "react";

interface DrackTabsProps {
  orientation?: "horizontal" | "vertical";
  selectedValue: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export function DrackTabs(props: PropsWithChildren<DrackTabsProps>) {
  const { orientation, selectedValue, handleChange, children } = props;

  return (
    <Tabs
      variant="standard"
      value={selectedValue}
      onChange={handleChange}
      orientation={orientation}
    >
      {children}
    </Tabs>
  );
}
