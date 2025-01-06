import { Grid2, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SkillBlockProps {
  title: string;
  children?: ReactNode;
}

const SkillBlock = ({ title, children }: SkillBlockProps) => {
  return (
    <>
      <Grid2 size={{ xs: 12, md: 6, lg: 3 }} border={"solid 2px black"} borderRadius={5} textAlign={"center"} sx={{ bgcolor: `primary.main` }}>
        <Typography
          variant="h3"
          borderBottom={"1px solid black"}
          pb={2}
          sx={{ bgcolor: `secondary.main`, borderTopLeftRadius: "19px", borderTopRightRadius: "19px" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" py={2} px={3}>
          {children}
        </Typography>
      </Grid2>
    </>
  );
};

export default SkillBlock;
