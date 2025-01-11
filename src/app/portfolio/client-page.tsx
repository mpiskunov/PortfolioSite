"use client";
import { Checkbox, Fab, FormControlLabel, Box, Grid2 } from "@mui/material";
import { Navigation } from "@mui/icons-material";
import React, { useEffect } from "react";
import { TagDictionary } from "./tags";
import WorkHistoryCard from "@/components/work-history/work-history";
import { ResumePointProps, ResumeSkillSummary } from "./resumePoints";
import { CheckIfAnyTagSelected, handleTagCheckedHandler } from "./resume";
import { FilterModal } from "./filter-modal";
import HeaderSection from "@/components/header/header";

interface PortfolioPageProps {
  tags: TagDictionary;
  resumeArr: ResumePointProps[];
  resumeSummaries: ResumeSkillSummary[];
}

const PortfolioPage = ({ tags, resumeArr, resumeSummaries }: PortfolioPageProps) => {
  //-------------------MODAL STUFF-------------------//
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [anyTagSelected, setAnyTagSelected] = React.useState(false);
  const [showPills, setShowPills] = React.useState(true);
  const [currentSelectedTags, setCurrentSelectedTags] = React.useState(new Set<string>());
  const [currentTags, setCurrentTags] = React.useState<TagDictionary>(tags);
  const [currentResumeArr, setResumeArr] = React.useState<ResumePointProps[]>(resumeArr);
  const [compColList, setCompColList] = React.useState<React.JSX.Element[][]>([]);
  const [currentResumeSummaries] = React.useState<ResumeSkillSummary[]>(resumeSummaries);

  useEffect(() => {
    const list: React.JSX.Element[] = [];
    const anyTagSelected = CheckIfAnyTagSelected(currentTags);

    for (const [key, value] of Object.entries(currentTags)) {
      list.push(
        <FormControlLabel
          key={key}
          control={<Checkbox value={value.id} checked={anyTagSelected ? value.isSelected : false} sx={{ "& .MuiSvgIcon-root": { fontSize: 35 } }} />}
          label={value.textValue}
          onClick={(e) => handleTagCheckedHandler(e, currentTags, setCurrentTags, currentSelectedTags, setCurrentSelectedTags)}
        />
      );
    }

    // group up these skills into bundles for display purposes
    const rows = 15;
    const compColList: React.JSX.Element[][] = [];
    for (let i = 0; i < Object.keys(currentTags).length; i = i + rows) {
      compColList.push(list.slice(i, i + rows));
    }
    setCompColList(compColList);
    setAnyTagSelected(anyTagSelected);
  }, [currentSelectedTags, currentTags]);

  useEffect(() => {
    // if resume array and current tags are populated
    if (currentResumeArr.length > 0 && Object.keys(currentTags).length > 0) {
      // collect all selected tags
      const selectedTagArr: Set<string> = new Set([]);
      for (const key in currentTags) {
        if (currentTags.hasOwnProperty(key)) {
          if (currentTags[key].isSelected) selectedTagArr.add(currentTags[key].textValue);
        }
      }
      // top level boolean for any tag selected
      const anyTagSelected = CheckIfAnyTagSelected(currentTags);

      // loop through resume points
      for (let i = 0; i < currentResumeArr.length; i++) {
        if (anyTagSelected) {
          const tagArray = Array.from(selectedTagArr);
          let alreadyTagged = false;
          for (let k = 0; k < tagArray.length; k++) {
            if (alreadyTagged) break;
            if (currentResumeArr[i].tags.has(tagArray[k]) && !alreadyTagged) {
              currentResumeArr[i].displayItem = true;
              alreadyTagged = true;
            } else if (!alreadyTagged) {
              currentResumeArr[i].displayItem = false;
            }
          }
        } else {
          // if no tags are selected, we want to display everything
          currentResumeArr[i].displayItem = true;
        }
      }
      setResumeArr(currentResumeArr);
    }
  }, [currentTags, currentResumeArr]);

  return (
    <>
      <HeaderSection isSticky={false} />
      <Box pt={2} />
      <Grid2 container alignItems="center" justifyContent="center">
        <Grid2 size={{ xs: 12, lg: 8 }}>
          <WorkHistoryCard
            imageSrc="/magicleap.png"
            workTitle="Senior Software Engineer"
            timeStr="October 2023 - Present"
            showPills={showPills}
            resumePoints={currentResumeArr.sort((item) => item.order).filter((val) => val.displayItem == true && val.grouping == "ml")}
            resumeSkillSummary={currentResumeSummaries.find((x) => x.grouping == "ml")}
            currentSelectedTags={currentSelectedTags}
          />
          <WorkHistoryCard
            imageSrc="/rm.png"
            workTitle="Software Engineer"
            timeStr="September 2020 - August 2023"
            showPills={showPills}
            resumePoints={resumeArr.sort((item) => item.order).filter((val) => val.displayItem == true && val.grouping == "rm")}
            resumeSkillSummary={resumeSummaries.find((x) => x.grouping == "rm")}
            currentSelectedTags={currentSelectedTags}
          />

          <WorkHistoryCard
            imageSrc="/nxtgen.png"
            workTitle="Principal Engineer"
            timeStr="October 2020 - April 2022"
            showPills={showPills}
            resumePoints={resumeArr.sort((item) => item.order).filter((val) => val.displayItem == true && val.grouping == "nxt")}
            resumeSkillSummary={resumeSummaries.find((x) => x.grouping == "nxt")}
            currentSelectedTags={currentSelectedTags}
          />

          <WorkHistoryCard
            imageSrc="/rihousing.png"
            workTitle="Web Application Developer"
            timeStr="September 2019 - August 2020"
            showPills={showPills}
            resumePoints={resumeArr.sort((item) => item.order).filter((val) => val.displayItem == true && val.grouping == "ri")}
            resumeSkillSummary={resumeSummaries.find((x) => x.grouping == "ri")}
            currentSelectedTags={currentSelectedTags}
          />

          <WorkHistoryCard
            imageSrc="/explorica.png"
            workTitle="Software Engineer"
            timeStr="March 2018 - September 2019"
            showPills={showPills}
            resumePoints={resumeArr.sort((item) => item.order).filter((val) => val.displayItem == true && val.grouping == "exp")}
            resumeSkillSummary={resumeSummaries.find((x) => x.grouping == "exp")}
            currentSelectedTags={currentSelectedTags}
          />
        </Grid2>
      </Grid2>
      {anyTagSelected && (
        <Fab
          variant="extended"
          color="secondary"
          sx={{ position: "fixed", bottom: "20px", right: "285px" }}
          onClick={() => {
            for (const key in currentTags) {
              if (currentTags.hasOwnProperty(key)) {
                currentTags[key].isSelected = false;
              }
            }
            setCurrentTags({ ...currentTags });
            setCurrentSelectedTags(new Set<string>());
          }}
        >
          remove filters
        </Fab>
      )}
      <Fab
        variant="extended"
        color="secondary"
        sx={{ position: "fixed", bottom: "20px", right: "140px" }}
        onClick={() => {
          setShowPills(!showPills);
        }}
      >
        {showPills ? "hide" : "show"} all tags
      </Fab>
      <Fab variant="extended" color="primary" sx={{ position: "fixed", bottom: "20px", right: "20px" }} onClick={() => setModalIsOpen(true)}>
        <Navigation sx={{ mr: 1 }} />
        Filters
      </Fab>
      <FilterModal {...{ setModalIsOpen, modalIsOpen, compColList }} />
    </>
  );
};

export default PortfolioPage;
