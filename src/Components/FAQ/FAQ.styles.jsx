import { styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const AccordionIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  backgroundColor: theme.palette.text.blue.dark,
  color: theme.palette.text.white,
  borderRadius: '50%',
}));
