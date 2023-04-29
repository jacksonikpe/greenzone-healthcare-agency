/** @jsx jsx */

import { jsx, Box, Container, Grid, Button, Heading, Text } from "theme-ui";
import SectionHeading from "components/section-heading";

const ContactUs = () => {
  return (
    <Box as="section" id="contact" sx={styles.section}>
      <Container>
        <SectionHeading title="Contact Us" />
        <Box sx={styles.grid}>
          <Heading mb="10px" as="h4">
            Email: Greenzonehealthcare@consultant.com
          </Heading>
          <iframe
            style={{ width: "100%", border: "white", borderRadius: "8px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.3032641065074!2d-1.5881852241564725!3d53.81968053920325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487959314cbdb499%3A0x4672dfc0b2e51b44!2s44%20Estcourt%20Ave%2C%20Headingley%2C%20Leeds%20LS6%203ET%2C%20UK!5e0!3m2!1sen!2sng!4v1682778434415!5m2!1sen!2sng"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;

const styles = {
  section: {
    pt: [7, null, null, 6, null, null, 13],
    pb: [0, null, null, 8, null, null, 11],
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
