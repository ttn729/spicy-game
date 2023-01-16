import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Store } from '@/components/Store/store'
import { Navbar } from '@/components/Navbar/navbar'
import { CSScentered, CSSpage } from '@/styles/styles'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={CSSpage}>
        <div>
            <Navbar />
        </div>

        <div style={CSScentered}>
          <Store />
        </div>

      </main>
    </>
  )
}
