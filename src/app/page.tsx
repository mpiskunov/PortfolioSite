"use client";
import { Avatar, Box, Chip, Container, Grid2, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import SkillCard from "@/components/skill-card/skill-card";

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (
    <>
      <Box m={2}>
        <Container maxWidth={"xl"}>
          <Grid2 container spacing={2} padding={4}>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <Item>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </Item>
            </Grid2>
            <Grid2 size={4}>
              <Item>
                <Avatar
                  alt="Matthew Piskunov"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 250, height: 250 }}
                />
              </Item>
            </Grid2>
            <Grid2 size={4}>
              <Item>
                <Chip label="Chip Filled" />
              </Item>
            </Grid2>
            <Grid2 size={8}>
              <Item>
                <SkillCard />
              </Item>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </>
  );
}
