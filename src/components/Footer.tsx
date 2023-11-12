import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box, Divider } from "@mui/material";
import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { linkDiscord, linkGithub, linkTwitter } from "../Config";


const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#00000080",
        color: "white",
        minHeight: '8vh',
        width: '100%',
      }}
    >
      <Divider sx={{backgroundColor:"#ffffff"}}/> 
        <Grid container>
        <Grid item md={3}></Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" align="center">
              <img width={215} style={{margin: 'auto'}} src={"/umilogo.png"}/>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" align="center">
              Follow Us
              <div>
              <Link href={linkGithub} color="inherit">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                href={linkTwitter}
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link href={linkDiscord} color="inherit">
                <FontAwesomeIcon icon={faDiscord} />
              </Link>
              </div>
            </Typography>
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
        <Box mt={9}>
          <Typography variant="body2" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://umineko.pl">
              umineko.pl
            </Link>{" "}
            {new Date().getFullYear()}
          </Typography>
        </Box>
    </Box>
  );
};

export default Footer;
