import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaProps {
  title: string;
  description: string;
  image: string;
}

const Meta = ({ title, description, image }: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" lang="ko" content={description} data-react-helmet="true" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} data-react-helmet="true" />
      <meta property="og:description" content={description} data-react-helmet="true" />
      <meta property="og:image" content={image} data-react-helmet="true" />
      <meta property="og:url" content="https://localhost/" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} data-react-helmet="true" />
      <meta name="twitter:description" content={description} data-react-helmet="true" />
      <meta name="twitter:image" content={image} data-react-helmet="true" />
      <meta name="twitter:domain" content="https://localhost/" />
    </Helmet>
  );
};

export default Meta;
