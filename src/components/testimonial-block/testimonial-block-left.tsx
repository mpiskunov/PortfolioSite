"use client";
import { Button, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { TestimonialInfo } from "@/app/testimonials/testimonials";

interface TestimonialBlockProps {
  testimonialInfo: TestimonialInfo;
}

const TestimonialBlockLeft = ({ testimonialInfo }: TestimonialBlockProps) => {
  return (
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
        <Image className="circle-border" src={testimonialInfo.portraitPath} alt={testimonialInfo.fullName} width={250} height={250} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 9 }} bgcolor={"secondary.main"} borderRadius={5} border={"1px solid black"}>
        <Grid2 container style={{ width: "100%" }} justifyContent={"end"} pr={3}>
          <Grid2 size={{ xs: 12 }} pl={3} py={4}>
            <Typography variant="h4">
              <i>{testimonialInfo.testimonialText}</i>
            </Typography>
            <br />
            <Typography display={"inline-block"} variant="h5">
              - {testimonialInfo.fullName}, {testimonialInfo.currentTitle} @ {testimonialInfo.currentCompany}
              <br />
              <Button target="blank" href={testimonialInfo.gitHubProfileURL}>
                <GitHubIcon fontSize="large" sx={{ color: "background.default" }} />
              </Button>
              <Button target="blank" href={testimonialInfo.linkedInURL}>
                <LinkedInIcon fontSize="large" sx={{ color: "background.default" }} />
              </Button>
              <Button href={testimonialInfo.email}>
                <EmailIcon fontSize="large" sx={{ color: "background.default" }} />
              </Button>
            </Typography>
          </Grid2>
          <Grid2 size={{ md: 12 }} bgcolor={"secondary.main"}></Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default TestimonialBlockLeft;
