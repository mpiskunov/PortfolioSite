import { ResumePointProps } from "@/app/resume/resumePoints";
import { ExpandMore } from "@mui/icons-material";
import {
  Paper,
  Grid2,
  Divider,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  styled,
  Chip,
} from "@mui/material";
import * as React from "react";
import Image from "next/image";

interface WorkHistoryCardProps {
  imageSrc: string;
  workTitle: string;
  timeStr: string;
  resumePoints: ResumePointProps[];
  showPills: boolean;
}

export default function WorkHistoryCard({
  imageSrc,
  workTitle,
  timeStr,
  resumePoints,
  showPills,
}: WorkHistoryCardProps) {
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));

  return (
    <>
      <Paper elevation={10} sx={{ p: 3 }}>
        <Grid2 container>
          <Grid2
            size={{ xs: 12, md: 1 }}
            sx={{
              display: "flex",
              alignItems: "end",
            }}
          >
            <Image
              src={imageSrc}
              alt={"Magic Leap, Inc."}
              width={200}
              height={200}
            ></Image>
          </Grid2>
          <Divider orientation="vertical" flexItem />
          <Grid2 size={{ xs: 12, md: 9 }} sx={{ pl: 2 }}>
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                alignItems: "end",
                height: "100px",
                textAlign: "left",
              }}
            >
              {workTitle}
            </Typography>
          </Grid2>
          <Root>
            <Divider textAlign="right">{timeStr}</Divider>
          </Root>
        </Grid2>
        <Grid2 size={{ xs: 12 }} sx={{ pt: 2 }}>
          <Accordion defaultExpanded={true} elevation={11}>
            <AccordionSummary
              sx={{
                flexDirection: "row-reverse",
              }}
              expandIcon={<ExpandMore />}
            ></AccordionSummary>
            <AccordionDetails>
              <Grid2 container>
                <Grid2 size={12} sx={{ pl: 3 }}>
                  <List sx={{ listStyleType: "disc" }}>
                    {resumePoints.map((val, i) => {
                      return (
                        <ListItem sx={{ display: "list-item" }} key={i}>
                          <Typography>{val.textValue}</Typography>{" "}
                          {showPills &&
                            Array.from(val.tags)
                              .sort()
                              .map((item, index) => (
                                <Chip label={item} key={index} />
                              ))}
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid2>
              </Grid2>
            </AccordionDetails>
          </Accordion>
        </Grid2>
      </Paper>
    </>
  );
}
