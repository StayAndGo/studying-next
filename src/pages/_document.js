import { Html, Head, Main, NextScript } from 'next/document'
// TODO: used for what?
import { CssBaseline } from '@nextui-org/react';

export default function Document() {
  return (
    <Html lang="en">
    <Head>{CssBaseline.flush()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
