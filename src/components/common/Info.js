 
import { Box, Typography, SvgIcon } from '@mui/material';

export default function Info({ info, iconURI }) {
  return (
    <Box
      sx={{
        color: 'text.text2',
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        '& img': {
          filter: 'opacity(0.5)',
          maxWidth: 16,
          maxHeight: 16,
        },
      }}
    >
      <SvgIcon component={iconURI} inheritViewBox alt="join time" />
      <Typography variant="h6">{info}</Typography>
    </Box>
  );
}
