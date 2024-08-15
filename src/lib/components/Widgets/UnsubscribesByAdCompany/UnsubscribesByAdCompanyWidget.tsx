// UnsubscribesByAdCompanyWidget.tsx

import React, { useState } from 'react';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@mui/material';
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon
} from '@mui/icons-material';
import { UnsubscribesByAdCompany } from './useUnsubscribesByAdCompanyWidgetLogic';
import { InviteLinkGroups } from '@/lib/components/InviteLinkPicker/useInviteLinkPickerLogic';

export interface UnsubscribesByAdCompanyWidgetProps {
  list: (Omit<InviteLinkGroups[number], 'items'> & { items: (InviteLinkGroups[number]['items'][number] & UnsubscribesByAdCompany)[] })[]
}

interface RowProps {
  group: UnsubscribesByAdCompanyWidgetProps['list'][number]
}

function Row(props: RowProps) {
  const { group } = props;
  const [open, setOpen] = useState(false);

  const totalJoined = group.items.reduce((sum, item) => sum + item.joined_count, 0);
  const totalLeft = group.items.reduce((sum, item) => sum + item.left_count, 0);
  const totalRemaining = totalJoined - totalLeft;
  const totalRemainingPercent = totalJoined === 0 ? 0 : (totalRemaining / totalJoined) * 100;

  return (
    <>
      <TableRow>
        <TableCell
          sx={{ minWidth: '220px', pl: 0 }}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {group.name}
        </TableCell>
        <TableCell sx={{ width: '120px' }}>{totalJoined}</TableCell>
        <TableCell sx={{ width: '120px' }}>{totalLeft}</TableCell>
        <TableCell sx={{ width: '120px' }}>{totalRemaining}</TableCell>
        <TableCell sx={{ width: '120px' }}>{totalRemainingPercent.toFixed(2)}%</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6} sx={{ m: 0, p: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ my: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {group.items.map(item => {
                    const remaining = item.joined_count - item.left_count;
                    const remainingPercent = item.joined_count === 0 ? 0 : (remaining / item.joined_count) * 100;

                    return (
                      <TableRow key={item.id} >
                        <TableCell sx={{ width: '220px', pl: 4 }}>{item.name || item.invite_link}</TableCell>
                        <TableCell sx={{ width: '120px' }}>{item.joined_count}</TableCell>
                        <TableCell sx={{ width: '120px' }}>{item.left_count}</TableCell>
                        <TableCell sx={{ width: '120px' }}>{remaining}</TableCell>
                        <TableCell sx={{ width: '120px' }}>{remainingPercent.toFixed(2)}%</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export function UnsubscribesByAdCompanyWidget(props: UnsubscribesByAdCompanyWidgetProps) {
  const { list } = props;

  return (
    <Box>
      <Paper>
        <Typography sx={{ p: 2 }}>Отписки по рекламным кампаниям</Typography>
        <TableContainer sx={{ overflow: 'scroll', maxWidth: '700px', maxHeight: '500px' }}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: '220px' }} />
                <TableCell sx={{ width: '120px' }}>Подписки</TableCell>
                <TableCell sx={{ width: '120px' }}>Отписки</TableCell>
                <TableCell sx={{ width: '120px' }}>Осталось</TableCell>
                <TableCell sx={{ width: '120px' }}>Осталось, %</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map(group => (
                <Row key={group.id} group={group} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
