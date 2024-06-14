import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';

import { paths } from 'src/routes/paths';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';
import Label from 'src/components/label';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import LoginButton from '../common/login-button';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      {/* <Stack sx={{
          bgcolor: '#1D9CAB',
        }}>
          <Container>
            <div className="bg-liburdulu-blue text-white p-2 flex justify-between items-center h-[28px] mb-0.5 p-0.5 flex">
              <div className='grid grid-flow-col'>Follow Libur Dulu
                <div className="">
                  <a href="#" className="text-white">Facebook</a>
                  <a href="#" className="text-white">Twitter</a>
                  <a href="#" className="text-white">Instagram</a>
                  <a href="#" className="text-white">LinkedIn</a>
                </div>
              </div>

            </div>
          </Container>
        </Stack> */}
      <Stack
        // className='bg-liburdulu-orange'
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <div className="px-[150px] bg-liburdulu-blue text-white p-2 flex justify-between items-center h-[28px] mb-0.5 p-0.5 flex">
              <div className='grid grid-flow-col'>Follow Libur Dulu
                <div className="">
                  <a href="#" className="text-white">Facebook</a>
                  <a href="#" className="text-white">Twitter</a>
                  <a href="#" className="text-white">Instagram</a>
                  <a href="#" className="text-white">LinkedIn</a>
                </div>
              </div>

            </div>
        
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>

          <Logo />



          {mdUp && <NavDesktop data={navConfig} />}

          <Box sx={{ flexGrow: 1 }} />
          {mdUp && <LoginButton />}

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            <Button variant="contained" target="_blank" rel="noopener" href={paths.minimalUI}>
              Register
            </Button>



            {/* <SettingsButton
              sx={{
                ml: { xs: 1, md: 0 },
                mr: { md: 2 },
              }}
            /> */}

            {!mdUp && <NavMobile data={navConfig} />}
          </Stack>
        </Container>
      </Stack>
      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
