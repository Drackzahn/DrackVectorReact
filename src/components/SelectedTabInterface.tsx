import { Box } from "@mui/material";
import { PropsWithChildren, useContext } from "react";
import { IDataBase } from "../data/context/iDataContext";
import {
  DataSelectorHandler,
  IDataSelectorHandlerProps,
} from "./DataSelectorHandler";
import { DataContext } from "../data/context/dataContext";

export interface ISelectedTabInterfaceProps<T extends IDataBase>
  extends IDataSelectorHandlerProps<T> {}

export function SelectedTabInterface<T extends IDataBase>(
  props: PropsWithChildren<ISelectedTabInterfaceProps<T>>
) {
  const data = useContext(DataContext);

  return (
    <Box
      display="grid"
      gridTemplateAreas="'dataArea selectionArea'"
      gridTemplateColumns="1fr auto"
      gridTemplateRows="1fr"
      gap={4}
    >
      <Box gridArea="selectionArea" padding={2}>
        <DataSelectorHandler
          dataContext={props.dataContext}
          createNew={props.createNew}
        />
      </Box>

      {props.dataContext?.selectedData !== null && (
        <Box
          gridArea="dataArea"
          sx={{
            overflowY: "auto",
          }}
          maxHeight={data!.stageHeight - 300}
          width="500px"
        >
          {props.children}
        </Box>
      )}
    </Box>
  );
}
