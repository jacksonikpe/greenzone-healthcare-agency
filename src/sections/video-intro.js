/** @jsx jsx */

import { jsx, Box, Container, Grid, Button, Heading, Text } from "theme-ui";
import Image from "components/image";
import videoBanner from "assets/images/AboutImg.jpg";
import SectionHeading from "components/section-heading";

const VideoIntro = () => {
  return (
    <Box as="section" id="about" sx={styles.section}>
      <Container>
        <SectionHeading title="About Us" />
        <Box sx={styles.grid}>
          <Box sx={styles.videoWrapper}>
            <Image
              src={videoBanner}
              width="700"
              className="video-banner"
              alt="video banner"
            />
          </Box>
          <Box sx={styles.content}>
            <Text as="p" sx={styles.summary}>
              Our agency is dedicated to improving the lives of our clients by
              offering a range of high-quality services designed to meet their
              unique needs. <br />
              We specialize in healthcare and IT services. At Greenzone
              healthcare, we are committed to providing the highest level of
              service to our clients. Our team is dedicated to helping
              individuals and businesses achieve their goals and improve their
              quality of life. Contact us today to learn more about our services
              and how we can help you.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoIntro;

const styles = {
  section: {
    pt: [7, null, null, 6, null, null, 13],
    pb: [0, null, null, 8, null, null, 11],
  },
  grid: {
    display: ["flex", null, null, "grid"],
    flexDirection: ["column", null, null, "unset"],
    gap: "0 30px",
    alignItems: "start",
    gridTemplateColumns: [
      "1fr",
      null,
      null,
      "1fr",
      "1fr 1fr",
      "600px 1fr",
      "760px 1fr",
    ],
  },
  videoWrapper: {
    textAlign: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: [2, null, null, 0, 4, 0],
    ".video-banner": {
      maxWidth: ["100%", null, null, null, null, "100%"],
      borderRadius: "8px",
      width: "550px",
    },
  },
  content: {
    px: [null, null, null, 8, 0],
  },
  playPause: {
    color: "white",
    fontWeight: 700,
    position: "absolute",
    padding: "0px",
    bottom: [40, null, null, 70, 100],
    left: "50%",
    transform: "translateX(-50%)",
    ":focus": {
      outline: 0,
    },
    img: {
      mr: "16px",
    },
  },
  title: {
    color: "heading",
    fontWeight: 500,
    fontSize: [5, null, null, 10, null, 11],
    lineHeight: 1.53,
    letterSpacing: ["-0.5px", null, null, "-1px"],
    textAlign: ["center", null, null, "left"],
    span: {
      backgroundSize: "cover",
      px: 2,
    },
  },
  summary: {
    color: "textSecondary",
    fontSize: [1, null, null, 2, "15px", 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    mt: [4, null, null, 5, 3, 5],
    maxWidth: 470,
    textAlign: ["center", null, null, "left"],
  },
  list: {
    gap: "0 18px",
    gridTemplateColumns: ["repeat(2, 142px)", null, null, "repeat(2, 180px)"],
    listStyle: "none",
    mt: [4, null, null, 5, 3, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, "15px", 2],
      alignItems: "center",
      color: "textSecondary",
      display: "flex",
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
