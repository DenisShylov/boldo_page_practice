import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
// Locale Files
import { footerTableItems, tableHeaders } from '../../../Constants/Constants';
import {
  CustomTableCell,
  CustomTableContainer,
  Hiring,
} from './TableFooter.styles';

const TableFooter = () => {
  return (
    <CustomTableContainer component={Paper} sx={{ position: 'relative' }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((item) => (
              <TableCell
                key={item}
                sx={{
                  fontWeight: 700,
                  border: 0,
                  fontFamily: 'Open Sans',
                  fontSize: '20px',
                }}
                align="right"
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {footerTableItems.map(({ id, item1, item2, item3 }) => (
            <TableRow key={id} sx={{ border: 0 }}>
              <CustomTableCell align="right">{item1}</CustomTableCell>
              <CustomTableCell align="right">{item2}</CustomTableCell>
              <CustomTableCell align="right">{item3}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Hiring>Hiring!</Hiring>
    </CustomTableContainer>
  );
};

export default TableFooter;
