import {Box, styled, Typography} from "@mui/material";
import {StyledButton} from "../../core/ui/styled-components/styled-button";

export const PopupInner = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  width: 100%;
  background-color: white;
  padding: 30px;
  @media (max-width: 700px) {
    padding: 20px 25px;
  }
`;
export const FormItem = styled(Box)`
  margin-bottom: 12px
`;
export const FormTitle = styled(Typography)`
  text-align: center; 
  margin-bottom: 20px;
`;
export const FormButton = styled(StyledButton)`
  align-self: end; 
  max-width: 100px; 
  width: 100%;
  margin-top: 10px;
`;