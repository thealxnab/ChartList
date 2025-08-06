import React, {FC, useState} from 'react';
import {
  Button, Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Popup from "../../components/popup/popup";
import {StyledTableCell} from './styled';
import {POPUP} from "../../components/popup/interface";
import {ColorType} from "highcharts";
import {useTypedDispatch} from "../../core/hooks/redux";
import {removeChart} from "../../core/store/reducers/chartListSlice/chartListSlice";

interface ChartItemProps {
  type: string | undefined,
  name: string | undefined,
  color: ColorType | undefined,
  id: string | undefined,
}

const ChartItem: FC<ChartItemProps> = ({name, type, color, id}) => {
  const [isOpenEditChartModal, setIsOpenEditChartModal] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const dispatch = useTypedDispatch();

  const removeChartHandler = () => {
    dispatch(removeChart(id));
  };

  return (
    <>
      <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
        <StyledTableCell align="left">{name}</StyledTableCell>
        <StyledTableCell align="left">{type}</StyledTableCell>
        <StyledTableCell align="left">{String(color)}</StyledTableCell>
        <StyledTableCell align="right">
          <IconButton size="small" onClick={() => setIsOpenEditChartModal(true)}>
            <EditIcon/>
          </IconButton>

          <IconButton size="small" onClick={() => setIsRemoveDialogOpen(true)}>
            <DeleteIcon/>
          </IconButton>
        </StyledTableCell>
      </TableRow>

      <Dialog
        open={isRemoveDialogOpen}
        onClose={() => setIsRemoveDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete this chart?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={() => setIsRemoveDialogOpen(false)}>Cansel</Button>
          <Button onClick={removeChartHandler}>Delete</Button>
        </DialogActions>
      </Dialog>

      <Popup isOpen={isOpenEditChartModal} setIsOpen={setIsOpenEditChartModal} type={POPUP.EDIT_CHART} id={id}/>
    </>
  );
};

export default ChartItem;