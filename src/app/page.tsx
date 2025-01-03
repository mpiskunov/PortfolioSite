"use client";
import { Box, Button, Divider, Grid2, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SkillBlock from "@/components/skill-block/skill-block";

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
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100vh", minHeight: "800px" }}>
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
                engineer, consultant, and mentor.
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
              <Link href={"/resume-pdf"} className="hover-link">
                <Typography variant="h4" pb={2}>
                  resume (pdf)
                </Typography>
              </Link>
              <Link href={"/resume-interactive"} className="hover-link">
                <Typography variant="h4">resume (interactive)</Typography>
              </Link>
              <Link href={"/testimonials"} className="hover-link">
                <Typography variant="h4" pt={2}>
                  testimonials
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
        <Grid2 container py={7} px={3} sx={{ bgcolor: `secondary.main` }} justifyContent={"left"} spacing={2} borderTop={"solid 1px black"}>
          <Grid2 size={{ xs: 12, lg: 9 }} border={"solid 2px black"} p={5} borderRadius={5}>
            <Typography variant="h3" pb={2}>
              Hello, folks!
            </Typography>
            <Typography variant="h4" pb={2}>
              My name is <strong>Matthew Piskunov</strong> and I crafted this website using <strong>next.js</strong>! I am passionate and curious
              about technology and solving complex issues that can be intimidating by nature. Through my professional career, I&apos;ve been
              interested in full stack technologies, curating safe and collaborative environments for my colleagues, and providing mentorships and
              demos to others.
            </Typography>
            <Typography variant="h4" py={2}>
              <strong>If I don&apos;t know a technology, I learn it. If I already know that technology, then I automate it.</strong>
            </Typography>
            <Typography variant="h4" pb={2}>
              Whenever I have time to myself, I enjoy trying new technologies, building physical structures and renovating rooms on my property, and
              hanging out with all my animals.
            </Typography>
            <Typography variant="h4"> Dogs & chickens & goats, oh my!</Typography>
          </Grid2>

          <Grid2 size={{ lg: 3 }} sx={{ display: { md: "none", lg: "block" } }} p={5}>
            <Image
              src={"/goats.jpg"}
              alt={"goats"}
              objectFit="contain"
              width={400}
              height={400}
              style={{ border: "2px solid black", borderRadius: "10px" }}
            ></Image>
          </Grid2>
        </Grid2>
        <Grid2 container sx={{ bgcolor: `background.default` }} justifyContent={"center"} spacing={2} borderTop={"solid 1px black"} py={7} px={3}>
          <SkillBlock rating={4} title="front-end">
            I&apos;ve created fully functioning websites using technologies like <strong>React</strong>, <strong>Angular</strong>,{" "}
            <strong>Razor</strong>, and <strong>Next.js</strong> (as well as plain old <strong>HTML</strong> & <strong>JavaScript</strong>).
          </SkillBlock>
          <SkillBlock rating={4.5} title="back-end">
            My usual stack involves <strong>C#/.NET</strong>, however, I am very comfortable with working in <strong>Golang</strong>,{" "}
            <strong>Node.js</strong>, and <strong>Python</strong> applications. These frameworks have been used for architectures such as{" "}
            <strong>APIs</strong>, <strong>microservices</strong>, <strong>monolithic apps</strong>, and <strong>command line tools</strong>.
          </SkillBlock>
          <SkillBlock rating={4.5} title="ci/cd">
            CI/CD is one of my favorite areas of expertise, as I have created reusable build/deploy jobs in <strong>CircleCI</strong>,{" "}
            <strong>Gitlab Pipelines</strong>, <strong>MSBuild</strong>, <strong>Azure Pipelines</strong>, and <strong>Jenkins</strong> for other
            teams to use.
          </SkillBlock>
          <SkillBlock rating={4} title="devops">
            A length of my career was geared towards DevOps. I&apos;ve helped machine learning teams with their workloads by provisioning their{" "}
            <strong>cloud environments</strong>, providing <strong>documentation</strong> and <strong>diagrams</strong>, and{" "}
            <strong>troubleshooting</strong> Linux-based VMs via <strong>bash/ansible scripting</strong>.
          </SkillBlock>
          <SkillBlock rating={4} title="cloud">
            I have professional and actionable knowledge with <strong>GCP</strong>, <strong>AWS</strong>, and <strong>Azure</strong> (in that order).
            I&apos;ve provisioned and architected resources such as <strong>IAM</strong>, <strong>serverless functions</strong>,{" "}
            <strong>buckets</strong>, and much more!
          </SkillBlock>
          <SkillBlock rating={4.5} title="infrastructure">
            I&apos;ve automated frameworks such as <strong>Terraform</strong>, <strong>Ansible</strong>, <strong>Docker</strong>,{" "}
            <strong>Helm</strong>, <strong>Kubernetes</strong>, and other processes to help speedline development & deployment for my team and others.
          </SkillBlock>
          <SkillBlock rating={5} title="mentorships">
            By providing <strong>mentorships</strong> to numerous people in my career, I&apos;ve been able to help these colleagues grow and &#34;
            <strong>level up</strong>&#34; within their personal careers. This, to me, is one the most important skills that I hone!
          </SkillBlock>
          <SkillBlock rating={3} title="wood-working">
            Because my house is almost 300 years old, I have lots of renovation work ahead of me! Even though I&apos;m not the best at building
            things, I&apos;m always working towards to improve my skills.
          </SkillBlock>
        </Grid2>
      </Box>
    </>
  );
}
