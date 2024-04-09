import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { IDataBase, IDataContext } from "../data/context/iDataContext";
import { CollapseLeft } from "./CollapseLeft";
import { useDataSelector } from "../hooks/useDataSelector";

export interface IDataSelectorHandlerProps<T extends IDataBase> {
  dataContext: IDataContext<T>;
  createNew: () => T;
}

export function DataSelectorHandler<T extends IDataBase>(
  props: IDataSelectorHandlerProps<T>
) {
  const [addElement, deleteElement, duplicateElement, changeSelectedElement] =
    useDataSelector(props.dataContext, props.createNew);

  return (
    <CollapseLeft>
      <Box
        display="grid"
        gridTemplateAreas="'AddButton' 
                            'DeleteButton'
                            'DuplicateButton'
                            'Divider'
                            'Elements'"
        gridTemplateRows="auto auto auto auto 1fr"
        gap={1}
      >
        <Box gridArea="AddButton">
          <Button
            variant="contained"
            onClick={addElement}
            fullWidth
            size="small"
          >
            <Typography>Add</Typography>
          </Button>
        </Box>

        <Box gridArea="DeleteButton">
          <Button
            variant="contained"
            onClick={deleteElement}
            fullWidth
            size="small"
          >
            <Typography>Delete</Typography>
          </Button>
        </Box>

        <Box gridArea="DuplicateButton">
          <Button
            variant="contained"
            onClick={duplicateElement}
            fullWidth
            size="small"
          >
            <Typography>Duplicate</Typography>
          </Button>
        </Box>

        <Box gridArea="Divider">
          <Divider />
        </Box>

        <Box gridArea="Elements">
          <Stack direction="column" rowGap={1}>
            {props.dataContext.datas.length === 0 ? (
              <Typography>No Elements</Typography>
            ) : (
              props.dataContext.datas.map((data) => (
                <Button
                  variant={
                    data.id === props.dataContext.selectedData?.id
                      ? "outlined"
                      : "text"
                  }
                  onClick={() => changeSelectedElement(data)}
                  key={data.id}
                  size="small"
                >
                  <Typography fontSize={12}>
                    {data.layerPosition} - {data.name}
                  </Typography>
                </Button>
              ))
            )}
          </Stack>
        </Box>
      </Box>
    </CollapseLeft>
  );
}
