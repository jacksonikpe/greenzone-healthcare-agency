/** @jsx jsx */
import { Fragment } from "react";
import { jsx, Box, Container, Grid } from "theme-ui";
import TrackVisibility from "react-on-screen";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";
import StatItem from "components/cards/stat-item";
import icon1 from "assets/images/services/network-management.png";
import icon2 from "assets/images/services/customer-support.png";
import icon3 from "assets/images/services/setup.png";
import icon4 from "assets/images/services/acquisition.png";
import icon5 from "assets/images/services/technical-support.png";

const data = {
  services: [
    {
      id: 1,
      icon: icon1,
      title: "Network management",
      desc: `designed to help businesses optimize their network performance, reduce downtime, and improve security. Our team of experienced technicians offers comprehensive network monitoring, troubleshooting, and maintenance services to ensure your network runs smoothly and efficiently.`,
      link: "#",
    },
    {
      id: 2,
      icon: icon2,
      title: "On-site system maintenance and services",
      desc: `keep your systems running smoothly and efficiently. Our experienced technicians offer a range of services, including hardware and software installation, updates, and troubleshooting, to ensure your systems are up-to-date and functioning optimally.`,
      link: "#",
    },
    {
      id: 3,
      icon: icon3,
      title: "System set ups",
      desc: `help your system get up and running quickly and efficiently. Our experienced technicians offer a range of services, including hardware and software installation, network configuration, and system testing, to ensure your systems are set up correctly and running smoothly.`,
      link: "#",
    },
    {
      id: 4,
      icon: icon4,
      title: "Sales of peripheral computer parts",
      desc: `offer a wide selection of high-quality components to help your computer systems operate at peak performance.`,
      link: "#",
    },
    {
      id: 4,
      icon: icon5,
      title: "IT consulting services",
      desc: `We offer a wide range of IT consulting services. Our goal is to help your business leverage technology to stay competitive in today's rapidly changing digital landscape.`,
      link: "#",
    },
  ],
};

const Services1 = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading slogan="IT" title="Services We Offer for" />
        <Grid sx={styles.serviceGrid}>
          {data.services.map((item) => (
            <Service key={item.id} service={item} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services1;

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
