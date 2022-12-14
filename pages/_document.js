import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: "kengru's blog",
    description: 'hablando del día a día.',
    image:
      'https://drive.google.com/file/d/1LXh9NcbSBB2zadHIhlxcMGlvmXXJ9T0v/view?usp=share_link'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kxngru" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
