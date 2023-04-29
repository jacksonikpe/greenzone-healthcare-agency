/** @jsx jsx */
import {
  jsx,
  Box,
  Text,
  Radio,
  Image,
  Label,
  Input,
  Button,
  Heading,
  Checkbox,
} from "theme-ui";
import { rgba } from "polished";
import { useState } from "react";

import googlePay from "assets/images/icons/google-pay.png";
import dotPattern from "assets/images/dot-pattern.png";

const presetAmounts = [5, 20, 50, 100];

const DonationForm = () => {
  return (
    <Box sx={styles.formWrapper}>
      <Heading sx={styles.title}>Reliable.</Heading>
      <Heading sx={styles.title}>Effective.</Heading>
      <Heading sx={styles.title}>Healthcare & IT Services</Heading>
      <h4 style={{ marginBottom: "0px" }}>
        Providing client-focused quality services remains our major focus.
        Choosing us means choosing the best healthcare & IT services
      </h4>
    </Box>
  );
};

export default DonationForm;

const styles = {
  formWrapper: {
    p: ["0px", null, null, "35px 40px 50px"],
    position: "relative",
    "::before, ::after": {
      background: `url(${dotPattern}) no-repeat right top`,
      content: [null, null, null, null, null, `''`],
      position: "absolute",
      width: 302,
      height: 347,
      zIndex: -1,
    },
    "::before": {
      left: "-60px",
      bottom: 15,
    },
    "::after": {
      right: "-41px",
      top: "-30px",
    },
  },
  title: {
    color: "textSecondary",
    fontWeight: "bold",
    fontSize: [6, null, null, 12, 8, 11],
    lineHeight: 1.4,
    letterSpacing: "heading",
    textAlign: ["center", null, null, null, "left"],
  },
  form: {
    label: {
      alignItems: "center",
      cursor: "pointer",
      fontWeight: 400,
    },
  },
  radioGroup: {
    display: "flex",
    alignItems: ["flex-start", null, null, "center"],
    flexDirection: ["column", null, null, "row"],
    mb: [5, null, null, 5],
    "> label": {
      alignItems: "center",
      fontSize: [1, null, null, "15px"],
      width: "auto",
      "+ label": {
        ml: [null, null, null, 4],
        mt: [2, null, null, 0],
      },
    },
  },
  presetAmounts: {
    display: "grid",
    alignItems: "center",
    marginBottom: 15,
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: ["7px", null, null, 2],
    mb: [3],
    label: {
      color: "textSecondary",
      border: (t) => `1px solid ${t.colors.borderColor}`,
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: [1, 2, null, 3],
      lineHeight: 1.11,
      minHeight: [40, null, null, null, 50, 60],
      padding: 0,
      textAlign: "center",
      transition: "0.3s ease-in-out 0s",
      "> div": {
        position: "absolute",
        height: 0,
        opacity: 0,
        visibility: "hidden",
        width: 0,
      },
      "&.active": {
        backgroundColor: "#F5F4FF",
        borderColor: "primary",
        color: "#7B72F0",
      },
    },
  },
  otherAmount: {
    mb: [3, null, null, 4],
    input: {
      minHeight: [45, null, null, 60, 50, 60],
      "::placeholder": {
        color: rgba("#02073E", 0.35),
      },
    },
  },
  checkbox: {
    display: "flex",
    justifyContent: "center",
    label: {
      span: {
        fontSize: [0, 1],
      },
    },
  },
  buttonGroup: {
    mt: [5, null, null, 8],
    span: {
      display: "flex",
      justifyContent: "center",
      color: rgba("#000", 0.4),
      fontWeight: "bold",
      fontSize: 1,
      lineHeight: 2.87,
    },
    button: {
      minHeight: [45, null, null, 60, 50, 60],
      width: "100%",
    },
  },
  googlePay: {
    backgroundColor: "#EDF2F7",
    minHeight: 60,
    py: 0,
    fontSize: [1, null, null, 2],
    img: {
      mr: 2,
      maxWidth: [23, 25, null, null, 25, "100%"],
    },
  },
};
