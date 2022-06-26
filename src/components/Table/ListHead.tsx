import type { FunctionComponent, ChangeEvent } from 'react';
import type { ITableHead, ITableOrder } from '../../types/table';
// @mui
import { Box, Checkbox, TableRow, TableCell, TableHead, TableSortLabel } from '@mui/material';

const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
};

const ListHead: FunctionComponent<{
  order: ITableOrder;
  orderBy: string;
  rowCount: number;
  headLabel: ITableHead[];
  numSelected: number;
  onRequestSort: (property: string) => void;
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
  showCheckbox?: boolean;
}> = ({ order, orderBy, rowCount, headLabel, numSelected, onRequestSort, onSelectAllClick, showCheckbox }) => {
  return (
    <TableHead>
      <TableRow>
        {showCheckbox && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
        )}
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => onRequestSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ListHead;
