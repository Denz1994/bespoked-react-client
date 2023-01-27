import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    manufacturer: string,
    productName: string,
    purchasePrice:number,
    salePrice: number,
    qtyOnHand: number,
    commissionPercentage: number
) {
  return { manufacturer, productName, purchasePrice, salePrice, qtyOnHand, commissionPercentage };
}

const salespersonData = {
    manufacturer: '',
    productName: '',
    purchasePrice: 0,
    salePrice: 0,
    qtyOnHand: 0,
    commissionPercentage: 0
}
const getSalespersonData = async (event:any) => {
  await fetch('http://localhost:5001/v1/lake/customers')
      .then(res=>res.json())
      .then(data => {
        console.log('Fetched data = ', data)
      })
      .catch(err=>console.log(err));
    }
  
const rows = [
  createData(
    salespersonData.manufacturer,
    salespersonData.productName,
    salespersonData.purchasePrice,
    salespersonData.salePrice,
    salespersonData.qtyOnHand,
    salespersonData.commissionPercentage,
    )
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.manufacturer}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.manufacturer}
              </TableCell>
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell align="right">{row.purchasePrice}</TableCell>
              <TableCell align="right">{row.salePrice}</TableCell>
              <TableCell align="right">{row.qtyOnHand}</TableCell>
              <TableCell align="right">{row.commissionPercentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}