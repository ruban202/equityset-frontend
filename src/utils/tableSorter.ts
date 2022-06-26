import type { ITableOrder } from '../types/table';

export const descendingComparator = (a: any, b: any, orderBy: string) => {
  if (orderBy === '') return 0;

  const orderByA = a[orderBy];
  const orderByB = b[orderBy];

  if (orderByB < orderByA) {
    return -1;
  }

  if (orderByB > orderByA) {
    return 1;
  }

  return 0;
};

export const getComparator = (order: ITableOrder, orderBy: string) => {
  return order === 'desc'
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
};
