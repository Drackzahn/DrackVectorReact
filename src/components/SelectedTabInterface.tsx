import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { IDataBase } from "../data/context/iDataContext";
import { DataSelectorHandler, IDataSelectorHandlerProps } from "./DataSelectorHandler";

export interface ISelectedTabInterfaceProps<T extends IDataBase> extends IDataSelectorHandlerProps<T> {
}

export function SelectedTabInterface<T extends IDataBase>(props: PropsWithChildren<ISelectedTabInterfaceProps<T>>) {

    return (
        <Box
            display="grid"
            gridTemplateAreas="'dataArea selectionArea'"
            gridTemplateColumns="auto auto"
            gridTemplateRows="1fr"
            gap={4}>

            <Box
                gridArea="selectionArea"
                padding={2}>
                <DataSelectorHandler dataContext={props.dataContext}
                    createNew={props.createNew} />
            </Box>

            {props.dataContext?.selectedData !== null &&
                <Box gridArea="dataArea">
                    {props.children}
                </Box>
            }
        </Box>
    )
}