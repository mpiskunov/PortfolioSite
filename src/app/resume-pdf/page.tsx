//import { Document } from "react-pdf";

import { Box, Stack } from "@mui/material";

const ResumePDFPage = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100vh", minHeight: "700px" }}>
          <object data="/resume2024.pdf" type="application/pdf" width="100%" height="100%" />
        </Stack>
      </Box>
    </>
  );
};

export default ResumePDFPage;
