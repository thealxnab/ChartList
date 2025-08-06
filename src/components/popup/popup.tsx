import React, {FC} from 'react';
import {Modal} from '@mui/material';
import EditChartForm from "./edit-chart-form";
import AddChartForm from "./add-chart-form";
import {PopupInner} from './styled';
import {POPUP, PopupProps} from "./interface";

const Popup: FC<PopupProps> = ({isOpen, setIsOpen, type, id}) => {
  const popupInner = () => {
    switch (type) {
      case POPUP.EDIT_CHART:
        return <EditChartForm setIsOpen={setIsOpen} id={id}/>;
      case POPUP.ADD_CHART:
        return <AddChartForm setIsOpen={setIsOpen}/>;
      default:
        return null;
    }
  }

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)} sx={{margin: "0 15px"}}>
      <PopupInner>
        {popupInner()}
      </PopupInner>
    </Modal>
  );
};

export default Popup;