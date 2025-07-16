import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
          crossOrigin="anonymous"
        ></script>
        
        {/* PropellerAds */}
        <script 
          async 
          src="https://ads.propellerads.com/v5/2048-rewards.js"
          data-ppid="YOUR_PROPELLER_ID"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
