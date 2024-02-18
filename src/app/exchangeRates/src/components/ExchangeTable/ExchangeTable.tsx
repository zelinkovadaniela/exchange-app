import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { FC, PropsWithChildren } from "react"

export interface ExchangeTableProps extends PropsWithChildren {}

export const ExchangeTable: FC<ExchangeTableProps> = ({ children }) => {
    return (
        <Table sx={{ border: '1px solid rgb(212, 213, 214)' }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: 'primary.dark' }}>
            <TableCell color="secondary">Currency</TableCell>
            <TableCell color="secondary">Country</TableCell>
            <TableCell align="center" color="secondary">
              Quantity
            </TableCell>
            <TableCell align="center" color="secondary">
              We buy
            </TableCell>
            <TableCell align="center" color="secondary">
              We sell
            </TableCell>
            <TableCell align="center" color="secondary">
              Mid
            </TableCell>
            <TableCell align="center" color="secondary">
              CNB - mid
            </TableCell>
            <TableCell align="center" color="secondary">
              Change (%)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {children}
        </TableBody>
      </Table>
    )
}