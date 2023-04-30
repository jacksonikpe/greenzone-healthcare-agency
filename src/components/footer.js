/** @jsx jsx */
import { jsx, Flex, Box, Text, Container } from "theme-ui";
import { rgba } from "polished";
import logo from "assets/images/smallLogo.png";

const menuItems = [
  {
    path: "#home",
    label: "Home",
  },
  {
    path: "#advertise",
    label: "Advertise",
  },
  {
    path: "#supports",
    label: "Supports",
  },
  {
    path: "#marketing",
    label: "Marketing",
  },
  {
    path: "#faq",
    label: "FAQ",
  },
];

const copyrightYear = new Date().getFullYear();
const copyrightSymbol = "\u00A9";
const companyName = "Pagelab Digital";

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <style jsx>{`
        @media screen and (max-width: 600px) {
          .text {
            font-size: 15px;
          }
          .logo {
            height: 30px;
          }
        }
      `}</style>
      <Container>
        <Flex sx={styles.footerInner}>
          <Flex sx={styles.copyright}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img className="logo" height="40" src={logo} />
              <h2
                className="text"
                style={{ color: "white", margin: "0px 0px 0px 10px" }}
              >
                Greenzone Healthcare Limited
              </h2>
            </div>

            <Text as="span">
              {copyrightSymbol} {copyrightYear} {companyName}
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: "#2B293E",
    pt: [6],
    pb: [6],
  },
  footerInner: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, null, "row"],
  },
  copyright: {
    alignItems: "center",
    flexDirection: ["column", null, null, null, "row"],
    span: {
      color: rgba("white", 0.7),
      fontSize: 1,
      lineHeight: "18px",
      mt: [3, null, null, null, 0],
      ml: [0, null, null, null, "15px"],
      textAlign: ["center", null, null, "left"],
    },
  },
  logo: {},
  footerNav: {
    listStyle: "none",
    // flexDirection: ['column', null, null, null, 'row'],
    m: ["25px 0 0", null, null, null, 0],
    p: 0,
    li: {
      "+ li": {
        ml: [3, null, null, null, 3, 4],
      },
      a: {
        color: "white",
        cursor: "pointer",
        textDecoration: "none",
        fontSize: [1, null, null, 2, 1, 2],
      },
    },
  },
};
