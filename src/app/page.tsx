"use client";
import { Box, Button, Divider, Grid2, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Paper from "@mui/material/Paper";

export default function Home() {
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    fontWeight: "bold",
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100vh", minHeight: "700px" }}>
          <Grid2 container justifyContent={"center"} maxWidth={"md"}>
            <Grid2 size={{ xs: 12 }}>
              <div style={{ display: "grid", placeItems: "center", overflow: "hidden" }}>
                <Image className="circle-border" src={"/hs2-modified.png"} alt="mpiskunov" width={300} height={300} />
              </div>
            </Grid2>
            <Grid2 size={{ xs: 12 }} pt={2}>
              <Typography variant="h3" align="center">
                Matthew Piskunov
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Typography variant="h4" align="center">
                engineer, mentor, and consultant.
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12 }} pt={2}>
              <Stack direction={"row"} spacing={2} justifyContent="center" alignItems="center">
                <Button target="blank" href="https://github.com/mpiskunov">
                  <GitHubIcon fontSize="large" />
                </Button>
                <Button target="blank" href="https://www.linkedin.com/in/matthew-piskunov-230a881a9/">
                  <LinkedInIcon fontSize="large" />
                </Button>
                <Button href={`mailto:matthewpiskunov@gmail.com`}>
                  <EmailIcon fontSize="large" />
                </Button>
              </Stack>
            </Grid2>
            <Grid2 size={{ xs: 8 }} pt={3} offset={{ xs: 2 }}>
              <Root>
                <Divider></Divider>
              </Root>
            </Grid2>
            <Grid2 size={{ xs: 2 }}></Grid2>
            <Grid2 size={{ xs: 4 }} pt={3} textAlign={"center"}>
              <Link href={"/about"} className="hover-link">
                <Typography variant="h4">about</Typography>
              </Link>
              <Link href={"/resume"} className="hover-link">
                <Typography variant="h4" pt={2}>
                  resume
                </Typography>
              </Link>
              <Link href={"/resume"} className="hover-link">
                <Typography variant="h4" pt={2}>
                  goats?
                </Typography>
              </Link>
            </Grid2>
          </Grid2>
        </Stack>
        <Grid2 container py={3} sx={{ bgcolor: `primary.main` }} justifyContent={"center"} spacing={2}>
          <Paper elevation={0} />
          <Grid2 size={{ xs: 12, lg: 7 }} borderTop={"solid 2px red"}>
            <Paper elevation={0} />
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 7 }} borderTop={"solid 2px red"}>
            d
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 7 }} borderTop={"solid 2px red"}>
            d
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 7 }} borderTop={"solid 2px red"}>
            d
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 7 }} borderTop={"solid 2px red"}>
            d
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
