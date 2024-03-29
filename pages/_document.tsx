import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@900&display=swap"
            // href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@800&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json"/>
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          {/* <ColorModeScript /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
