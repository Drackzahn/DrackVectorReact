import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { IDataBase, IDataContext } from "../data/context/iDataContext";

export interface IDataSelectorHandlerProps<T extends IDataBase> {
    dataContext: IDataContext<T>;
    createNew: () => T;
}

export function DataSelectorHandler<T extends IDataBase>(props: IDataSelectorHandlerProps<T>) {

    function addElement() {
        const newValue = props.createNew();
        props.dataContext.add(newValue);
    }

    function deleteElement() {
        if (props.dataContext.selectedData !== null)
            props.dataContext.delete(props.dataContext.selectedData);
    }

    function duplicateElement() {
        if (props.dataContext.selectedData !== null)
            props.dataContext.duplicate(props.dataContext.selectedData);
    }

    function changeSelectedElement(newValue: T) {
        props.dataContext.select(newValue);
    }


    return (
        <Box
            display="grid"
            gridTemplateAreas="'AddButton' 
                            'DeleteButton'
                            'DuplicateButton'
                            'Divider'
                            'Elements'"
            gridTemplateRows="auto auto auto auto 1fr"
            gap={1}
            justifyContent="flex-end"
        >
            <Box
                gridArea="AddButton">
                <Button
                    variant="contained"
                    onClick={addElement}
                    fullWidth
                >
                    <Typography>Add</Typography>
                </Button>
            </Box>

            <Box
                gridArea="DeleteButton">
                <Button
                    variant="contained"
                    onClick={deleteElement}
                    fullWidth
                >
                    <Typography>Delete</Typography>
                </Button>
            </Box>

            <Box
                gridArea="DuplicateButton">
                <Button
                    variant="contained"
                    onClick={duplicateElement}
                    fullWidth
                >
                    <Typography>Duplicate</Typography>
                </Button>
            </Box>

            <Box
                gridArea="Divider">
                <Divider />
            </Box>

            <Box
                gridArea="Elements">
                <Stack direction="column"
                    rowGap={1}>
                    {props.dataContext.datas.length === 0 ? <Typography>No Elements</Typography>
                        : props.dataContext.datas.map(data => (
                            <Button
                                variant={data.id === props.dataContext.selectedData?.id ? "contained" : "outlined"}
                                onClick={() => changeSelectedElement(data)}
                            >
                                <Typography>{data.layerPosition} - {data.name}</Typography>
                            </Button>
                        ))}
                </Stack>
            </Box>
        </Box>
    )
}