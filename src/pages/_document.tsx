import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

          <link rel="shortcut icon" href="spacetraveling.svg" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
