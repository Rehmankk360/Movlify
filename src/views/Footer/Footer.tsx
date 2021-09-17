import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
export default function Footer() {
  return (
    <Box
      style={{
        padding: "25px 0",
        borderTop: "1px solid #3b3333",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          color: "#c4c4c4",
          fontSize: "16px",
        }}
      >
        Made with ☕ and 💘 by Rehman A.K.A{" "}
        <a
          href={"https://github.com/Shutah64"}
          target="_blank"
          style={{ color: "rgb(229 113 119)" }}
        >
          Shutah64{" "}
        </a>{" "}
        Checkout my{" "}
        <a
          href={"https://github.com/Shutah64"}
          target="_blank"
          style={{ color: "rgb(229 113 119)" }}
        >
          Github{" "}
        </a>
        . code for this project{" "}
        <a
          href={"https://github.com/Shutah64/movie-streaming"}
          target="_blank"
          style={{ color: "rgb(229 113 119)" }}
        >
          Movlify{" "}
        </a>
        .
      </Typography>
    </Box>
  );
}
