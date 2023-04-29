/** @jsx jsx */
import { Fragment } from "react";
import { jsx, Box, Container, Grid } from "theme-ui";
import TrackVisibility from "react-on-screen";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";
import StatItem from "components/cards/stat-item";
import icon1 from "assets/images/services/mental-health.png";
import icon2 from "assets/images/services/nursing-home.png";
import icon3 from "assets/images/services/lab-equipments.png";

const data = {
  services: [
    {
      id: 1,
      icon: icon1,
      title: "Mental health support services",
      desc: `Greenzone healthcare has a range of mental health support services that are available 24 hours a day, seven days a week. These services can provide treatment, information, tools and advice on how to deal with a range of mental health issues.`,
      link: "#",
    },
    {
      id: 2,
      icon: icon2,
      title: "Home-care support",
      desc: `The flexibility of our home care services enable you to live safely and comfortably in the place you know best – your home.`,
      link: "#",
    },
    {
      id: 3,
      icon: icon3,
      title: "Sales of laboratory equipment",
      desc: `Being completely client centric, our aim is to supply quality lab equipment to worldwide clients at reasonable prices, for promoting medical treatment, research & training`,
      link: "#",
    },
  ],
};

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading slogan="Healthcare" title="Services We Offer for" />
        <Grid sx={styles.serviceGrid}>
          {data.services.map((item) => (
            <Service key={item.id} service={item} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, 8, 10, null, 15],
    pb: [7, null, null, null, 10, null, 14],
  },
  serviceGrid: {
    backgroundColor: "white",
    boxShadow: "0px 0px 25px rgba(54, 91, 125, 0.04)",
    borderRadius: 10,
    gap: [8, null, null, "60px 40px", "50px 30px", "60px 40px"],
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(1, 250px)",
      null,
      null,
      "repeat(2, 260px)",
      "repeat(3, 258px)",
      "repeat(3, 300px)",
    ],
    pt: [8, null, null, 16],
    pb: [8, null, null, 15],
  },
  statsGrid: {
    gap: [6, null, null, "60px 30px", "60px 80px", "60px 110px"],
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(2, 120px)",
      null,
      null,
      "repeat(4, 130px)",
      "repeat(4, 150px)",
    ],
    mt: [10],
  },
};
