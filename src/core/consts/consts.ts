import {SeriesOptionsType} from "highcharts";

export const DEFAULT_CHART_TYPE = "line";
export const DEFAULT_CHART_COLOR = "black";
export const CHART_TYPES: SeriesOptionsType["type"][] = [
  "line",
  "spline",
  "area",
];
export const CHART_COLORS: SeriesOptionsType["color"][] = [
  "orange",
  "black",
  "red",
  "blue",
];
