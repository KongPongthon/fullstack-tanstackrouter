import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import React from 'react';

export interface TableColumn<T> {
  key: keyof T | (keyof T)[];
  name: string;
  type?:
    | 'default'
    | 'date'
    | 'datetime'
    | 'check'
    | 'rowActions'
    | 'dropdownActions'
    | 'menu'
    | 'permissions'
    | 'number';
  align?: 'left' | 'center' | 'right';
  alignY?: 'start' | 'center' | 'end';
  headerAlign?: 'left' | 'center' | 'right';
  sliceText?: number;
  minWidth?: string;
  render?: (value: string, row: T) => React.ReactNode;
  renderCustom?: (item: T) => React.ReactNode;
  onMoveOutClick?: (item: T) => void;
}

interface ITableProps<T> {
  rowsPerPage: number;
  onRowsPerPageChange: (value: number) => void;
  page: number;
  totalItems: number;
  data: T[];
  onPageChange: (value: number) => void;
  columns: TableColumn<T>[];
  setLastPage?: boolean;
  rowOptions?: number[];
}

export function CustomTable<T>({
  rowsPerPage,
  onRowsPerPageChange,
  page,
  totalItems,
  data,
  rowOptions = [5, 10, 20],
  columns,
  setLastPage = true,
  onPageChange,
}: ITableProps<T>) {
  const renderValue = (item: T, col: TableColumn<T>) => {
    const value = item;
    return value[col.key as keyof T];
  };
  return (
    <React.Fragment>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ลำดับ</TableHead>
            {columns.map((col, idx) => (
              <TableHead
                key={idx}
                className={cn(
                  'font-bold tracking-wider text-[14px]',
                  `text-${col.headerAlign || col.align || 'center'}`,
                  col.minWidth && `min-w-[${col.minWidth}]`
                )}
              >
                {col.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, i) => (
            <TableRow key={i} className='hover:bg-gray-50'>
              <TableCell className='text-center tracking-wide font-light py-4'>
                {page * rowsPerPage + i + 1}
              </TableCell>
              {columns.map((col, idx) => (
                <TableCell
                  key={idx}
                  className={cn(
                    'text-center tracking-wide font-light py-3',
                    col.align && `text-${col.align}`,
                    col.alignY && `flex items-${col.alignY}`
                  )}
                >
                  {renderValue(item, col) as React.ReactNode}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={cn(`flex justify-end items-center `)}>
        <div className='flex gap-2 items-center overflow-x-auto'>
          <span className={`text-sm text-nowrap `}>จำนวนรายการต่อหน้า</span>
          <Select
            value={rowsPerPage.toString()}
            onValueChange={(val) => onRowsPerPageChange(Number(val))}
          >
            <SelectTrigger className='w-[70px] h-[30px] bg-white border-0 shadow-none'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className='bg-white'>
              {rowOptions.map((opt) => (
                <SelectItem key={opt} value={opt.toString()}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className='text-sm text-nowrap'>
            {`${page * rowsPerPage + 1}-${Math.min(
              (page + 1) * rowsPerPage,
              totalItems ?? data.length
            )} 
              จาก
              ${totalItems ?? data.length}`}
          </div>
          {setLastPage && (
            <Button
              size='sm'
              variant='ghost'
              onClick={() => onPageChange(0)}
              disabled={page === 0}
            >
              <ChevronFirstIcon />
            </Button>
          )}

          <Button
            size='sm'
            variant='ghost'
            onClick={() => onPageChange(Math.max(0, page - 1))}
            disabled={page === 0}
          >
            <ChevronLeft />
          </Button>
          <Button
            size='lg'
            variant='ghost'
            onClick={() => onPageChange(page + 1)}
            disabled={(page + 1) * rowsPerPage >= (totalItems ?? data.length)}
          >
            <ChevronRight />
          </Button>
          {setLastPage && (
            <Button
              size='sm'
              variant='ghost'
              onClick={() =>
                onPageChange(
                  Math.ceil((totalItems ?? data.length) / rowsPerPage) - 1
                )
              }
              disabled={(page + 1) * rowsPerPage >= (totalItems ?? data.length)}
            >
              <ChevronLastIcon />
            </Button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
