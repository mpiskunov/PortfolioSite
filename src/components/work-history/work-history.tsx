import { ResumePointProps, ResumeSkillSummary } from "@/app/portfolio/resumePoints";
import { Paper, Grid2, Divider, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, styled, Chip, Button } from "@mui/material";
import * as React from "react";
import Image from "next/image";
import { ExpandMore } from "@mui/icons-material";

interface WorkHistoryCardProps {
  imageSrc: string;
  workTitle: string;
  timeStr: string;
  resumePoints: ResumePointProps[];
  showPills: boolean;
  currentSelectedTags: Set<string>;
  resumeSkillSummary: ResumeSkillSummary | undefined;
}

export default function WorkHistoryCard({ imageSrc, workTitle, timeStr, resumePoints, showPills, currentSelectedTags, resumeSkillSummary }: WorkHistoryCardProps) {
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
      <Paper elevation={10} sx={{ p: 3, mb: 2, mx: { xs: 2 } }}>
        <Grid2 container>
          <Grid2
            size={{ xs: 12, md: 1 }}
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Image src={imageSrc} alt={"Magic Leap, Inc."} width={100} height={100}></Image>
          </Grid2>
          <Divider orientation="vertical" flexItem />
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ pl: 2 }} alignContent={"end"}>
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                alignItems: "end",
                height: "50px",
                textAlign: "left",
              }}
            >
              {workTitle}{" "}
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
        <Grid2 container>
          <Grid2 size={{ xs: 12, md: 12 }} pl={2}>
            <Typography variant="h6">
              <strong>Cloud: </strong>
              {resumeSkillSummary && resumeSkillSummary.cloudSkillsText}
            </Typography>
            <Typography variant="h6">
              <strong>Languages: </strong>
              {resumeSkillSummary && resumeSkillSummary.languageSkillsText}
            </Typography>
            <Typography variant="h6">
              <strong>Frameworks: </strong>
              {resumeSkillSummary && resumeSkillSummary.frameworkSkillsText}
            </Typography>
          </Grid2>
          <Grid2 container size={12} pt={2} direction={"column"} alignItems="center" justifyContent="center">
            <Button variant="contained" onClick={() => setExpanded(!expanded)} fullWidth>
              {expanded ? "Hide" : "Show"}
            </Button>
          </Grid2>
        </Grid2>

        {expanded && (
          <Grid2 size={{ xs: 12 }} sx={{ pt: 2 }}>
            <Accordion defaultExpanded={false} expanded={expanded} onChange={() => handleChange()} elevation={11}>
              <AccordionDetails>
                <Grid2 container>
                  <Grid2 size={12} sx={{ pl: { xs: 1, md: 3 } }}>
                    <List sx={{ listStyleType: "disc" }}>
                      {resumePoints.map((val, i) => {
                        return (
                          <ListItem sx={{ display: "list-item" }} key={i}>
                            <Typography variant="h6">{val.textValue}</Typography>{" "}
                            {showPills &&
                              Array.from(val.tags)
                                .sort()
                                .map((item, index) => <Chip size="medium" sx={{ fontSize: "17px" }} label={item} key={index} color={currentSelectedTags.has(item) ? "primary" : "default"} />)}
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
