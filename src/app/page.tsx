"use client";
import { Divider, Grid2, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
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
            <div style={{ textAlign: "center" }}>
              <GitHubIcon fontSize="large" />
              <EmailIcon fontSize="large" />
              <LinkedInIcon fontSize="large" />
            </div>
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
          </Grid2>
        </Grid2>
      </Stack>
      <Grid2 sx={{ bgcolor: "white" }}>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }}>
            <Typography variant="h4">
              <strong>Hello!</strong>
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <Typography variant="h4">My name is Jeff</Typography>
          </Grid2>
        </Grid2>
      </Grid2>
      {/* <Box height={"100vh"} flexDirection={"column"} alignItems={"center"} display={"flex"}>
        <Grid2 container>
          <Grid2
          //   size={{ xs: 12, sm: 10, md: 6 }}
          //   offset={{ xs: 0, sm: 2, md: 5 }}
          >
            <List>
              <Link href={"/about"} className="hover-link">
                <ListItem>
                  <Typography variant="h4">about</Typography>
                </ListItem>
              </Link>
              <Link href={"/resume"} className="hover-link">
                <ListItem>
                  <Typography variant="h4">resume</Typography>
                </ListItem>
              </Link>
            </List>
          </Grid2>
        </Grid2>
      </Box> */}
    </>
  );
}
