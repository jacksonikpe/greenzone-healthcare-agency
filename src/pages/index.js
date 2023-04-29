import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Subscribe from "sections/subscribe";
import Services from "sections/services";
import Services1 from "sections/services1";
import VideoIntro from "sections/video-intro";
import ContactUs from "sections/constactUs";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Banner />
        <Services />
        <Services1 />
        <VideoIntro />
        <ContactUs />
      </Layout>
    </ThemeProvider>
  );
}
