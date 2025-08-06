import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import {FormButton, FormItem, FormTitle} from './styled';
import {nanoid} from "nanoid";
import {useTypedDispatch} from "../../core/hooks/redux";
import {defaultSeriesRandomData} from "../../core/highcharts-options/chartListData";
import {addChart} from "../../core/store/reducers/chartListSlice/chartListSlice";
import {SeriesOptionsType} from "highcharts";
import {CHART_COLORS, CHART_TYPES, DEFAULT_CHART_COLOR, DEFAULT_CHART_TYPE} from "../../core/consts/consts";

interface AddChartFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const AddChartForm: FC<AddChartFormProps> = ({setIsOpen}) => {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>(DEFAULT_CHART_TYPE);
  const [color, setColor] = useState<string>(DEFAULT_CHART_COLOR);
  const dispatch = useTypedDispatch();

  const clickHandler = () => {
    const chartTemplate: SeriesOptionsType = {
      // @ts-ignore
      type: type,
      name: name,
      color: color,
      id: nanoid(8),
      data: defaultSeriesRandomData(),
    };
    dispatch(addChart(chartTemplate));
    setIsOpen(false);
  }

  return (
    <>
      <FormTitle variant="h5">Adding new chart</FormTitle>

      <Box component="form"  onSubmit={clickHandler}>
        <FormItem>
          <TextField required label="Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)}/>
        </FormItem>

        <FormItem>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label3">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label3"
              id="demo-simple-select"
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

export default AddChartForm;

