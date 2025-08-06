import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import {FormButton, FormItem, FormTitle} from './styled';
import {useTypedDispatch, useTypedSelector} from "../../core/hooks/redux";
import {editChart} from "../../core/store/reducers/chartListSlice/chartListSlice";
import {SeriesOptionsType} from "highcharts";
import {CHART_COLORS, CHART_TYPES} from "../../core/consts/consts";

interface EditChartFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  id: string | undefined,
}

const EditChartForm: FC<EditChartFormProps> = ({setIsOpen, id}) => {
  const {chartList} = useTypedSelector(state => state.chartListReducer);
  const currentChart = chartList.find(chart => chart.id === id);
  const [name, setName] = useState(currentChart?.name);
  const [type, setType] = useState(currentChart?.type);
  const [color, setColor] = useState(currentChart?.color);
  const dispatch = useTypedDispatch();

  if (!currentChart) return null;

  const submitHandler = () => {
    const chartTemplate: SeriesOptionsType = {
      // @ts-ignore
      type: type,
      name: name,
      color: color,
      id: currentChart.id,
      // @ts-ignore
      data: currentChart.data
    };
    dispatch(editChart(chartTemplate));
    setIsOpen(false);
  }

  return (
    <>
      <FormTitle variant="h5">Chart editing</FormTitle>

      <Box onSubmit={submitHandler} component="form">
        <FormItem>
          <TextField value={name} onChange={(e) => setName(e.target.value)} label="Title" variant="outlined" fullWidth/>
        </FormItem>

        <FormItem>
          <FormControl fullWidth>
            <InputLabel id="color-select-label">Color</InputLabel>
            <Select
              labelId="color-select-label"
              id="color-select"
              value={color}
              label="Color"
              onChange={(e) => setColor(e.target.value)}
            >
              {CHART_COLORS.map((color) =>
                <MenuItem key={String(color)} value={String(color)}>{String(color)}</MenuItem>
              )}
            </Select>
          </FormControl>
        </FormItem>

        <FormItem>
          <FormControl fullWidth>
            <InputLabel id="type-select-label">Type</InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              value={type}
              label="Type"
              // @ts-ignore
              onChange={(e) => setType(e.target.value)}
            >
              {CHART_TYPES.map((type) =>
                <MenuItem key={type} value={type}>{type}</MenuItem>
              )}
            </Select>
          </FormControl>
        </FormItem>

        <Stack>
          <FormButton type="submit" variant="contained">Save</FormButton>
        </Stack>
      </Box>
    </>
  );
};

export default EditChartForm;


