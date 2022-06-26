import * as React from 'react';
import Head from 'next/head';
import { Box, Breadcrumbs, Container } from '@mui/material';
// components
import Link from '../components/Link';
import Iconify from '../components/Iconify';

const Page = React.forwardRef(function Page(
  props: {
    title: string;
    breadcrumbs?: { label: string; to: string }[];
    meta?: React.ReactNode;
    children: React.ReactNode;
  },
  ref: React.Ref<unknown>
) {
  const { title, breadcrumbs, meta, children, ...other } = props;
  return (
    <>
      <Head>
        <title>{`${title} · EquitySet`}</title>
        {meta}
      </Head>

      <Box ref={ref} {...other}>
        <Container maxWidth="xl">
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ typography: 'caption' }}
            separator={<Iconify icon="ic:baseline-keyboard-arrow-right" />}
          >
            {breadcrumbs?.map((b) => (
              <Link underline="hover" color="inherit" key={b.to} href={b.to}>
                {b.label}
              </Link>
            ))}
          </Breadcrumbs>
          {children}
        </Container>
      </Box>
    </>
  );
});

export default Page;
