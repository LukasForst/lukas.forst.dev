// noinspection JSUnusedGlobalSymbols

import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const title = 'Lukas Forst';
  const description = 'Lukas Forst - Senior Software Engineer, Co-founder Mild Blue, R&D at Wire, CyberSec at CTU, Research at StratosphereIPS';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>

        <link rel="icon" href={'/favicon.ico'}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        {/* Graph data */}
        <meta property="og:title" content={title}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={description}/>
        <meta
          property="og:image"
          content="/images/thumbnail.jpeg"
        />
        {/* Twitter */}
        <meta name="twitter:site" content="@lukas-forst"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:card" content="summary || summary_large_image || player || app"/>

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
