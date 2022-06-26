import * as React from 'react';
// @mui
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
// components
import Logo from '../../components/Logo';
import Image from 'next/image';
import Link from '../../components/Link';
import Iconify from '../../components/Iconify';

const Footer: React.FunctionComponent<{}> = () => {
  return (
    <Box component="footer">
      <Container maxWidth="xl">
        <Divider sx={{ borderBottomWidth: 2, width: 1, my: 3 }} />
        <Box sx={{ pt: 1, display: 'inline-flex' }}>
          <Logo />
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" sx={{ my: 3 }}>
          {/* Footer Menu */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={6}>
            {['Support', 'Product', 'Education', 'About'].map((title) => (
              <Stack key={title}>
                <Typography fontWeight={700} variant="body2">
                  {title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Pricing
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Documentation
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Guides
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  API Status
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Stack direction="column" spacing={1}>
            <Box>
              <Image src="/images/appstore.png" height={40} width={135} />
            </Box>
            <Box>
              <Image src="/images/google-play.png" height={40} width={135} />
            </Box>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row">
            <Typography variant="body2">©2022 Equityset, Inc. All rights reserved</Typography>
            <Link sx={{ ml: 2, typography: 'body2' }} color="text.primary" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link sx={{ ml: 2, typography: 'body2' }} color="text.primary" href="/term-of-service">
              Term Of Service
            </Link>
            <Link sx={{ ml: 2, typography: 'body2' }} color="text.primary" href="/sitemap">
              Sitemap
            </Link>
          </Stack>
          <Stack direction="row" spacing={5}>
            <Iconify icon="akar-icons:facebook-fill" color="grey.600" sx={{ fontSize: 20 }} />
            <Iconify icon="akar-icons:instagram-fill" color="grey.600" sx={{ fontSize: 20 }} />
            <Iconify icon="akar-icons:twitter-fill" color="grey.600" sx={{ fontSize: 20 }} />
            <Iconify icon="akar-icons:github-fill" color="grey.600" sx={{ fontSize: 20 }} />
            <Iconify icon="akar-icons:dribbble-fill" color="grey.600" sx={{ fontSize: 20 }} />
          </Stack>
        </Stack>
        <Divider sx={{ borderBottomWidth: 2, width: 1, my: 2 }} />
        <Typography variant="body2" color="text.secondary">
          Disclaimers: EquitySet LLC is not operated by a broker, a dealer, or a registered investment adviser. Under no
          circumstances does any information posted on EquitySet LLC represent an individualized recommendation to buy
          or sell a security. The information on this site, and in its related emails and newsletters, is not intended
          to be, nor does it constitute individual investment advice or recommendations. The users may buy and sell
          securities before and after any particular article and report and information herein is published, with
          respect to the securities discussed in any article and report posted herein. In no event shall EquitySet LLC
          be liable to any member, guest or third party for any damages of any kind arising out of the use of any
          content or other material published or available on EquitySet LLC, or relating to the use of, or inability to
          use, equitysetdata.com or any content, including, without limitation, any investment losses, lost profits,
          lost opportunity, special, incidental, indirect, consequential or punitive damages. Past performance is a poor
          indicator of future performance. The information on this site is in no way guaranteed for completeness,
          accuracy or in any other way. The companies listed on this website are not affiliated with EquitySet LLC .
        </Typography>
        <Box
          sx={{
            width: 1,
            textAlign: 'center',
            my: 2,
            bgcolor: 'grey.300',
          }}
        >
          <Typography variant="caption" color="primary.main">
            Equityset does not provide individualized investment advice or recommendations for individual portfolios.
          </Typography>
        </Box>
        <Box sx={{ height: 10 }} />
      </Container>
    </Box>
  );
};

export default Footer;
