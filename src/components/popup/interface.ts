export enum POPUP {
  ADD_CHART = "ADD_CHART",
  EDIT_CHART = "EDIT_CHART",
}
export interface PopupProps {
  isOpen: boolean,
  setIsOpen: any,
  type: POPUP,
  id?: string,
}