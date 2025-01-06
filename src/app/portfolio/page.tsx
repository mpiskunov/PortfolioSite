import PortfolioPage from "./client-page";
import { resumePointArray, resumeSkillSummaries } from "./resumePoints";
import { tagDictionary } from "./tags";

export default async function Page() {
  const tags = tagDictionary;
  const resPointsArr = resumePointArray;
  const resSkillSummary = resumeSkillSummaries;
  return <PortfolioPage tags={tags} resumeArr={resPointsArr} resumeSummaries={resSkillSummary} />;
}
