import { Grid2, Typography, styled, Rating } from "@mui/material";
import { ReactNode } from "react";

interface SkillBlockProps {
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  title: string;
  children?: ReactNode;
}

const SkillBlock = ({ rating, title, children }: SkillBlockProps) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "var(--cg-6)",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

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
        <StyledRating name="size-large" defaultValue={rating} precision={0.5} size="large" readOnly sx={{ pt: 2 }} />
        <Typography variant="h5" pb={2} px={3}>
          {children}
        </Typography>
      </Grid2>
    </>
  );
};

export default SkillBlock;
