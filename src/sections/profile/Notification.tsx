// @mui
import {
  Box,
  Button,
  Card,
  Divider,
  FilledInput,
  InputLabel,
  Select,
  Stack,
  Typography,
  MenuItem,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Chip,
} from '@mui/material';
// components
import Iconify from '../../components/Iconify';

export default function Notification() {
  return (
    <Box sx={{ my: 3, py: 2, px: 5, bgcolor: 'background.neutral', borderRadius: 1.5 }}>
      <Box mb={3}>
        <Typography variant="h4">Notification & Alerts</Typography>
        <Typography variant="body2" color="text.secondary">
          Customize the notification and alerts experience
        </Typography>
      </Box>

      <Card sx={{ boxShadow: 'none', border: 1, borderColor: 'grey.300', py: 2, px: 3, mb: 5 }}>
        <InputLabel sx={{ typography: 'body2', color: 'text.primary' }}>Email</InputLabel>
        <Stack alignItems="center" direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Box>
            <FilledInput
              disableUnderline
              id="email"
              size="small"
              placeholder="konstantinos.a@toptal.com"
              sx={{ bgcolor: 'grey.200', width: 312, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
              inputProps={{ sx: { py: 1.25 } }}
            />
          </Box>
          <Typography variant="body2" fontWeight={500}>
            This is the same email you have in your profile account.
          </Typography>
        </Stack>
      </Card>

      <Card sx={{ boxShadow: 'none', border: 1, borderColor: 'grey.300', py: 2, px: 3, mb: 5 }}>
        <InputLabel sx={{ typography: 'body2', color: 'text.primary' }}>Mobile Number</InputLabel>
        <Stack justifyContent="space-between" alignItems="center" direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Box>
            <FilledInput
              startAdornment={<Iconify icon="ant-design:info-circle-outlined" color="text.disabled" sx={{ mr: 1 }} />}
              disableUnderline
              id="phone"
              size="small"
              placeholder="Not provided"
              sx={{ bgcolor: 'grey.200', width: 312, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
              inputProps={{ sx: { py: 1.25 } }}
            />
          </Box>
          <Button
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => {}}
            variant="text"
            color="primary"
            sx={{
              height: 32,
              fontWeight: 500,
              textDecoration: 'underline',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Add Phone Number
          </Button>
        </Stack>
        <Stack alignItems="center" direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ my: 2 }}>
          <Typography variant="body2">Do not deliver SMS between :</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Select
              labelId="from-restriction"
              id="from-restriction"
              value="no"
              size="small"
              variant="outlined"
              sx={{ typography: 'body2' }}
            >
              <MenuItem value="no">No restriction</MenuItem>
            </Select>
            <Typography variant="body2" sx={{ mx: 2 }}>
              Until
            </Typography>
            <Select
              labelId="to-restriction"
              id="to-restriction"
              value="no"
              size="small"
              variant="outlined"
              sx={{ typography: 'body2' }}
            >
              <MenuItem value="no">No restriction</MenuItem>
            </Select>
          </Box>
        </Stack>
        <Divider sx={{ borderBottomWidth: 2, mt: 3 }} />
        <Typography variant="caption" color="text.secondary">
          By providing your phone number, you agree to receive text messages from triggers you enable on your account.
        </Typography>
        <Typography component="p" variant="caption" color="text.secondary">
          Equityset never will share your phone number with third parties.
        </Typography>
      </Card>

      <Typography variant="h5" sx={{ fontWeight: 500, mx: 2, my: 1 }}>
        Fair Value updates
      </Typography>
      <Card sx={{ boxShadow: 'none', border: 1, borderColor: 'grey.300', py: 2, px: 3, mb: 5 }}>
        <Table aria-label="fair value table">
          <TableBody>
            <TableRow key="daily" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" width={50}>
                <Typography fontWeight={600} color="text.secondary">
                  Daily
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Securites that hit their Fair Value
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row" align="center" width={10}>
                <Stack direction="row" spacing={5}>
                  <Box>
                    <Typography variant="body2" fontWeight={500} color="text.secondary">
                      SMS
                    </Typography>
                    <Checkbox defaultChecked />
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight={500} color="text.secondary">
                      Email
                    </Typography>
                    <Checkbox />
                  </Box>
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow key="weekly" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" width={50}>
                <Typography fontWeight={600} color="text.secondary">
                  Weekly
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Securites that hit their Fair Value
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row" align="center" width={10}>
                <Stack direction="row" spacing={5}>
                  <Box>
                    <Typography variant="body2" fontWeight={500} color="text.secondary">
                      SMS
                    </Typography>
                    <Checkbox />
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight={500} color="text.secondary">
                      Email
                    </Typography>
                    <Checkbox defaultChecked />
                  </Box>
                </Stack>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      <Typography variant="h5" sx={{ fontWeight: 500, mx: 2, my: 1 }}>
        Notifications
      </Typography>
      <Card sx={{ boxShadow: 'none', border: 1, borderColor: 'grey.300', py: 2, px: 3, mb: 5 }}>
        <Typography variant="body2">Select which types of emails you would like to receive</Typography>
        <Table aria-label="fair value table">
          <TableBody>
            <TableRow key="investor-summary" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" width="5%">
                <Checkbox defaultChecked />
              </TableCell>
              <TableCell component="th" scope="row" width="95%">
                <Stack direction="row" alignItems="center">
                  <Typography fontWeight={600} color="text.primary">
                    Investor Summary
                  </Typography>
                  <Chip
                    color="primary"
                    size="small"
                    label="Recommended"
                    sx={{ typography: 'caption', height: 20, borderRadius: 0.5, mx: 1 }}
                  />
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Important product updates from Equityset. New features and new research tools
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow key="important-updates" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" width="5%">
                <Checkbox />
              </TableCell>
              <TableCell component="th" scope="row" width="95%">
                <Typography fontWeight={600} color="text.secondary">
                  Important updates
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Important product updates from Equityset. New features and new research tools
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow key="marketing-campaigns" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" width="5%">
                <Checkbox />
              </TableCell>
              <TableCell component="th" scope="row" width="95%">
                <Typography fontWeight={600} color="text.secondary">
                  Marketing Campaigns
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Offers, discounts, referrals and other exclusive offers
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow key="account-and-security" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" width="5%">
                <Checkbox />
              </TableCell>
              <TableCell component="th" scope="row" width="95%">
                <Typography fontWeight={600} color="text.secondary">
                  Account and Security
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Emails about suspicious login attempts
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
}
