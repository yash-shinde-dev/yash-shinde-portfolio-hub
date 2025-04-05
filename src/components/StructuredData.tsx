
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  name: string;
  jobTitle: string;
  image: string;
  url: string;
  sameAs: string[];
  description: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({
  name,
  jobTitle,
  image,
  url,
  sameAs,
  description
}) => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "image": image,
    "url": url,
    "sameAs": sameAs,
    "description": description
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${name} | Portfolio`,
    "url": url,
    "description": description,
    "author": {
      "@type": "Person",
      "name": name
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
