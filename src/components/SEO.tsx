
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Yash Shinde | Full Stack Developer",
  description = "Yash Shinde is a passionate Full Stack Developer specializing in MERN stack development, currently pursuing MCA at MIT World Peace University.",
  keywords = "Yash Shinde, Full Stack Developer, MERN Stack, React Developer, Node.js Developer, Web Developer, Portfolio, MIT WPU",
  ogImage = "/yash-profile.jpg",
  ogUrl = "https://yashshinde.dev",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Yash Shinde" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};

export default SEO;
