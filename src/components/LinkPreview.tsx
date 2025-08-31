import { Helmet } from "react-helmet";

function LinkPreview() {
  return (
    <>
      <Helmet>
        <title>GoDaddy Page</title>
        <meta property="og:title" content="GoDaddy Page practice" />
        <meta property="og:description" content="GoDaddy main page built with React" />
        <meta property="og:image" content="https://mrseager.github.io/godaddy-page/images/GoDaddy_logo.png" />
        <meta property="og:url" content="https://mrseager.github.io/godaddy-page/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GoDaddy Page practice" />
        <meta name="twitter:description" content="GoDaddy main page built with React" />
        <meta name="twitter:image" content="https://mrseager.github.io/godaddy-page/images/GoDaddy_preview.png" />
      </Helmet>
    </>
  );
}

export default LinkPreview;
