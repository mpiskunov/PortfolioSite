//import { Document } from "react-pdf";

import HeaderSection from "@/components/header/header";
import { Box, Stack } from "@mui/material";

const ResumePDFPage = () => {
  return (
    <>
      <HeaderSection isSticky={false} />
      <Box sx={{ width: "100%" }}>
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100vh", minHeight: "700px" }}>
          <object data="/MatthewPiskunov_Resume.pdf" type="application/pdf" width="100%" height="100%" />
        </Stack>
      </Box>
    </>
  );
};

export default ResumePDFPage;
