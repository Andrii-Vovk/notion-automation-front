import { Helmet } from 'react-helmet';

const APP_NAME = 'vite-react-chakra-starter';

const Meta = () => {
  return (
    <Helmet>
      <title>Vite React Chakra Starter</title>
      <meta name="description" content="Vite React Chakra Starter Template" />

      <meta name="application-name" content={APP_NAME} />

      <meta name="theme-color" content="#FFFFFF" />

      <link rel="shortcut icon" href="/assets/favicon.svg" />
    </Helmet>
  );
};

export default Meta;
