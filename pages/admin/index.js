import React, { useEffect } from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import { app } from '../../utils/firebase';
import { Navbar } from '@/components/Navbar/navbar';
import { CSSpage } from '@/styles/styles';
import { Box, getListSubheaderUtilityClass } from '@mui/material';
import { Router } from '@mui/icons-material';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { getUsers } from '../../components/FetchDB/fetchdb';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const auth = getAuth(app);
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    router.push('/');
    return null;
  }

  if (user.uid !== 'KWgJsS0g6bh0jaghWKwU7deiy733') {
    router.push('/');
    return null;
  }

  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={CSSpage}>
        <Navbar />
        <Box
          sx={{
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <h1>Admin Page</h1>
          <h1>Admin Page</h1>
          <h1>Admin Page</h1>
          <h1>Admin Page</h1>
          <h1>Admin Page</h1>
        </Box>
      </main>
    </>
  );
}
