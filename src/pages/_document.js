import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
          integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>

        <script
          type="text/javascript"
          src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/gsap.min.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
