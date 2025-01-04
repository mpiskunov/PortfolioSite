import HeaderSection from "@/components/header/header";
import { Box, Grid2, Stack } from "@mui/material";
import Image from "next/image";
const TestimonialPage = () => {
  return (
    <>
      <HeaderSection />
      <Box sx={{ width: "100%" }}>
        <Stack direction="row" justifyContent="left" alignItems="center" sx={{ minHeight: "400px" }} bgcolor={"primary.main"}>
          <Grid2 container maxWidth={"md"}>
            <Grid2 size={{ xs: 12 }} pl={20}>
              <Image className="circle-border" src={"/hs2-modified.png"} alt="mpiskunov" width={300} height={300} />
            </Grid2>
          </Grid2>
        </Stack>
        <Stack direction="row" justifyContent="right" alignItems="center" sx={{ minHeight: "400px" }} bgcolor={"secondary.main"}>
          <Grid2 container maxWidth={"md"}>
            <Grid2 size={{ xs: 12 }} pr={20}>
              <Image className="circle-border" src={"/hs2-modified.png"} alt="mpiskunov" width={300} height={300} />
            </Grid2>
          </Grid2>
        </Stack>
        <Stack direction="row" justifyContent="left" alignItems="center" sx={{ minHeight: "400px" }} bgcolor={"primary.main"}>
          <Grid2 container maxWidth={"md"}>
            <Grid2 size={{ xs: 12 }} pl={20}>
              <Image className="circle-border" src={"/hs2-modified.png"} alt="mpiskunov" width={300} height={300} />
            </Grid2>
          </Grid2>
        </Stack>
      </Box>
    </>
  );
};

export default TestimonialPage;
