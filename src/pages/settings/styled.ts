import {styled, TableCell} from "@mui/material";

export const StyledTableCell = styled(TableCell)`
  &:last-child {
    padding-right: 0;
  };
  &:first-of-type {
    padding-left: 0;
  }
`;
export const StyledTableHeadCell = styled(StyledTableCell)`
  font-size: 18px;
  font-weight: 600;
`;