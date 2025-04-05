
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { HelmetProvider } from "react-helmet-async";

const Index: React.FC = () => {
  return (
    <HelmetProvider>
      <SEO />
      <StructuredData 
        name="Yash Shinde"
        jobTitle="Full Stack Developer"
        image="/yash-profile.jpg"
        url="https://yashshinde.dev"
        sameAs={[
          "https://github.com/yasssh-shinde",
          "https://linkedin.com/in/yasssh-shinde"
        ]}
        description="Yash Shinde is a passionate Full Stack Developer specializing in MERN stack development, currently pursuing MCA at MIT World Peace University."
      />
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </Layout>
    </HelmetProvider>
  );
};

export default Index;
