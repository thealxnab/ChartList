import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SeriesOptionsType} from "highcharts";
import {RootState} from "../../store";

interface ChartListState {
  chartList: SeriesOptionsType[],
}

const initialState: ChartListState = {
  chartList: [],
};

const chartListSlice = createSlice({
  name: "ChartList",
  initialState,
  reducers: {
    addChart(state, action: PayloadAction<SeriesOptionsType>) {
      state.chartList = [...state.chartList, action.payload]
    },
    editChart(state, action: PayloadAction<SeriesOptionsType>) {
      state.chartList = state.chartList.map(chart => {
        if (chart.id === action.payload.id) {
          return action.payload
        }
        return chart
      })
    },
    removeChart(state, action: PayloadAction<SeriesOptionsType["id"]>) {
      state.chartList = state.chartList.filter(chart => chart.id !== action.payload)
    },
  }
});

export const {
  addChart,
  removeChart,
  editChart
} = chartListSlice.actions;
export const selectChartList = (state: RootState) => state.chartListReducer;
export default chartListSlice.reducer;