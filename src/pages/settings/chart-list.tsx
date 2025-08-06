import React, {FC, useState} from 'react';
import {Stack, Table, TableBody, TableContainer, TableHead, TableRow, Typography,} from "@mui/material";
import ChartItem from "./chart-item";
import AddIcon from '@mui/icons-material/Add';
import {StyledFab} from "../../core/ui/styled-components/styled-fab";
import {StyledButton} from "../../core/ui/styled-components/styled-button";
import Popup from "../../components/popup/popup";
import {StyledTableHeadCell} from './styled';
import {POPUP} from "../../components/popup/interface";
import {useTypedSelector} from "../../core/hooks/redux";
import {selectChartList} from "../../core/store/reducers/chartListSlice/chartListSlice";

const ChartList: FC = () => {
  const [isOpenAddChartModal, setIsOpenAddChartModal] = useState<boolean>(false);
  const {chartList} = useTypedSelector(selectChartList);
  const isChartListEmpty = !!chartList.length;

  return (
    <>
      <Stack flexDirection="row" alignItems="center" justifyContent="space-between" pb={2}>
        <Typography variant="h4">Chart list</Typography>

        <StyledButton
          variant="contained"
          startIcon={<AddIcon/>}
          onClick={() => setIsOpenAddChartModal(true)}
          sx={{display: {"xs": "none", "sm": "flex"}, maxWidth: "180px"}}>
          Add new chart
        </StyledButton>
        <StyledFab
          onClick={() => setIsOpenAddChartModal(true)}
          color="primary"
          aria-label="add">
          <AddIcon/>
        </StyledFab>
      </Stack>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableHeadCell align="left">Title</StyledTableHeadCell>
              <StyledTableHeadCell align="left">Type</StyledTableHeadCell>
              <StyledTableHeadCell align="left">Color</StyledTableHeadCell>
              <StyledTableHeadCell align="right">Options</StyledTableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isChartListEmpty && chartList.map(({name, type, color, id}) => (
              <ChartItem key={id} name={name} type={type} color={color} id={id}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Popup isOpen={isOpenAddChartModal} setIsOpen={setIsOpenAddChartModal} type={POPUP.ADD_CHART}/>
    </>
  );
};

export default ChartList;