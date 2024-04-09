import { Paper } from "@mui/material";
import { PropsWithChildren } from "react";

export function DrackCentralPaper(props: PropsWithChildren) {
  return (
    <Paper
      sx={{
        height: "100%",
        display: "grid",
        alignContent: "center",
      }}
    >
      {props.children}
    </Paper>
  );
}
