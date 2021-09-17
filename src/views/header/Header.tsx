import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import SearchingMovie from "./SearchingMovie/SearchingMovie";
import useStyles from "./Styles";
import logo from '../../assets/logo.png'
export default function Header() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="fixed" className={styles.background}>
        <Container className={styles.containerFluid}>
          <Toolbar className={styles.header_wrapper}>
            <Typography className={styles.title} variant="h6" noWrap>
            <a href="/"><img src={logo} className={styles.logo}/></a>
            </Typography>
            <SearchingMovie/>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
