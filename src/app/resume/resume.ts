import { TagDictionary } from "./tags";

export const CheckIfAnyTagSelected = (currentTags: TagDictionary) => {
  let anyTagSelected: boolean = false;
  for (const key in currentTags) {
    if (anyTagSelected) break;
    if (currentTags.hasOwnProperty(key)) {
      anyTagSelected = currentTags[key].isSelected;
    }
  }
  return anyTagSelected;
};

export const handleTagCheckedHandler = (e: React.ChangeEvent<EventTarget>, currentTags: TagDictionary, callback: (value: React.SetStateAction<TagDictionary>) => void) => {
  if (e.target instanceof HTMLInputElement) {
    const { checked, value } = e.target;
    const newTag = currentTags[value];
    newTag.isSelected = checked;
    callback({ ...currentTags });
  }
};
