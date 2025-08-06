import React, {FC, useRef} from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import {getHighchartsOptions} from "../../core/highcharts-options/chartListData";
import {useTypedSelector} from "../../core/hooks/redux";
import {Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {selectChartList} from "../../core/store/reducers/chartListSlice/chartListSlice";

const ViewMode: FC = (props: HighchartsReact.Props) => {
  const {chartList} = useTypedSelector(selectChartList);
  const isChartListEmpty = !!chartList.length;
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const options = getHighchartsOptions(chartList, isChartListEmpty);

  return (
    <>
      {!isChartListEmpty && <Typography>Chart list is empty. To add new chart go to {<NavLink to="/settings">settings</NavLink>} page.</Typography>}
      {isChartListEmpty && <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} {...props}/>}
    </>
  );
};

export default ViewMode;
