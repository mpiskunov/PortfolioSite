import { ResumePointProps, ResumeSkillSummary } from "@/app/portfolio/resumePoints";
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
  Button,
} from "@mui/material";
import * as React from "react";
import Image from "next/image";

interface WorkHistoryCardProps {
  imageSrc: string;
  workTitle: string;
  timeStr: string;
  resumePoints: ResumePointProps[];
  showPills: boolean;
  currentSelectedTags: Set<string>;
  resumeSkillSummary: ResumeSkillSummary | undefined;
}

export default function WorkHistoryCard({
  imageSrc,
  workTitle,
  timeStr,
  resumePoints,
  showPills,
  currentSelectedTags,
  resumeSkillSummary,
}: WorkHistoryCardProps) {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

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
            <Image src={imageSrc} alt={"Magic Leap, Inc."} width={125} height={125}></Image>
          </Grid2>
          <Divider orientation="vertical" flexItem />
          <Grid2 size={{ xs: 12, md: 9 }} sx={{ pl: 2 }}>
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                alignItems: "end",
                height: "100px",
                textAlign: "left",
              }}
            >
              {workTitle}{" "}
              <Button sx={{ ml: 2 }} variant="contained" onClick={() => setExpanded(!expanded)}>
                {expanded ? "Hide" : "Show"} Details
              </Button>
            </Typography>
          </Grid2>
          <Root>
            <Divider textAlign="right">
              {
                <Typography variant="subtitle1">
                  <strong>{timeStr}</strong>
                </Typography>
              }
            </Divider>
          </Root>
        </Grid2>
        <Grid2 size={{ xs: 2 }} pl={2}>
          <Typography variant="h5">
            <strong>Cloud: </strong>
            {resumeSkillSummary && resumeSkillSummary.cloudSkillsText}
          </Typography>
          <Typography variant="h5">
            <strong>Languages: </strong>
            {resumeSkillSummary && resumeSkillSummary.languageSkillsText}
          </Typography>
          <Typography variant="h5">
            <strong>Frameworks: </strong>
            {resumeSkillSummary && resumeSkillSummary.frameworkSkillsText}
          </Typography>
          {/* <Typography pt={2}>
            <Button variant="contained" onClick={() => setExpanded(!expanded)}>
              {expanded ? "Hide" : "Show"}
            </Button>
          </Typography> */}
        </Grid2>
        {expanded && (
          <Grid2 size={{ xs: 12 }} sx={{ pt: 2 }}>
            <Accordion defaultExpanded={false} expanded={expanded} onChange={() => handleChange()} elevation={11}>
              <AccordionSummary
                sx={{
                  flexDirection: "row-reverse",
                }}
                //expandIcon={<ExpandMore />}
              ></AccordionSummary>
              <AccordionDetails>
                <Grid2 container>
                  <Grid2 size={12} sx={{ pl: 3 }}>
                    <List sx={{ listStyleType: "disc" }}>
                      {resumePoints.map((val, i) => {
                        return (
                          <ListItem sx={{ display: "list-item" }} key={i}>
                            <Typography variant="h5">{val.textValue}</Typography>{" "}
                            {showPills &&
                              Array.from(val.tags)
                                .sort()
                                .map((item, index) => (
                                  <Chip
                                    size="medium"
                                    sx={{ fontSize: "20px" }}
                                    label={item}
                                    key={index}
                                    color={currentSelectedTags.has(item) ? "primary" : "default"}
                                  />
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
        )}
      </Paper>
    </>
  );
}
