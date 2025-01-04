"use client";
import HeaderSection from "@/components/header/header";
import { Button, Grid2, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TestimonialPage = () => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <>
      <HeaderSection />
      <Grid2
        container
        style={{ width: "100%" }}
        justifyContent={"start"}
        alignItems={"center"}
        borderBottom={"1px solid black"}
        bgcolor={"primary.main"}
        px={3}
        py={3}
      >
        <Grid2 size={{ xs: 12, md: 3 }} py={4} px={10} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image className="circle-border" src={"/hs2-modified.png"} alt="mpiskunov" width={250} height={250} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 9 }} bgcolor={"secondary.main"} borderRadius={5} border={"1px solid black"}>
          <Grid2 container style={{ width: "100%" }} justifyContent={"end"} pr={3}>
            <Grid2 size={{ xs: 12 }} pl={3} py={4}>
              <Typography variant="h4">
                <i>
                  &rdquo;Matt is so cool. He does some real neat stuff with coding in C#, mentoring, and he likes beer. Sometimes, he likes to play
                  video games like Rocket League even though he is mediocre at it.&quot;
                </i>
              </Typography>
              <br />
              <Typography display={"inline-block"} variant="h5">
                - Matthew Piskunov, Senior Software Engineer @ Magic Leap, Inc.
                <br />
                <Button target="blank" href="https://github.com/mpiskunov">
                  <GitHubIcon fontSize="large" sx={{ color: "background.default" }} />
                </Button>
                <Button target="blank" href="https://www.linkedin.com/in/matthew-piskunov-230a881a9/">
                  <LinkedInIcon fontSize="large" sx={{ color: "background.default" }} />
                </Button>
                <Button href={`mailto:matthewpiskunov@gmail.com`}>
                  <EmailIcon fontSize="large" sx={{ color: "background.default" }} />
                </Button>
              </Typography>
            </Grid2>
            <Grid2 size={{ md: 12 }} bgcolor={"secondary.main"}></Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2
        container
        style={{ width: "100%" }}
        justifyContent={"start"}
        alignItems={"center"}
        borderBottom={"1px solid black"}
        bgcolor={"secondary.main"}
        px={3}
        py={3}
        direction={matches ? "row" : "column-reverse"}
      >
        <Grid2 size={{ xs: 12, md: 9 }} bgcolor={"primary.main"} borderRadius={5} border={"1px solid black"}>
          <Grid2 container style={{ width: "100%" }} justifyContent={"start "} px={3}>
            <Grid2 size={{ xs: 12 }} pl={3} py={4}>
              <Typography variant="h4">
                <i>
                  &rdquo;Matt is so cool. He does some real neat stuff with coding in C#, mentoring, and he likes beer. Sometimes, he likes to play
                  video games like Rocket League even though he is mediocre at it.&quot;
                </i>
              </Typography>
              <br />
              <Typography display={"inline-block"} variant="h5">
                - Matthew Piskunov, Senior Software Engineer @ Magic Leap, Inc.
                <br />
                <Button target="blank" href="https://github.com/mpiskunov">
                  <GitHubIcon fontSize="large" sx={{ color: "background.default" }} />
                </Button>
                <Button target="blank" href="https://www.linkedin.com/in/matthew-piskunov-230a881a9/">
                  <LinkedInIcon fontSize="large" sx={{ color: "background.default" }} />
                </Button>
                <Button href={`mailto:matthewpiskunov@gmail.com`}>
                  <EmailIcon fontSize="large" sx={{ color: "background.default" }} />
                </Button>
              </Typography>
            </Grid2>
            <Grid2 size={{ md: 12 }} bgcolor={"secondary.main"}></Grid2>
          </Grid2>
        </Grid2>{" "}
        <Grid2 size={{ xs: 12, md: 3 }} py={4} px={10} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image className="circle-border" src={"/hs2-modified.png"} alt="mpiskunov" width={250} height={250} />
        </Grid2>
      </Grid2>
    </>
  );
};

export default TestimonialPage;
