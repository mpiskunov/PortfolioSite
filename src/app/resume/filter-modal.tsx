import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid2,
  ListItem,
  FormGroup,
  DialogActions,
  Button,
} from "@mui/material";

interface FilterModalProps {
  setModalIsOpen: (value: React.SetStateAction<boolean>) => void;
  modalIsOpen: boolean;
  compColList: React.JSX.Element[][];
}
export const FilterModal = ({
  setModalIsOpen,
  modalIsOpen,
  compColList,
}: FilterModalProps) => {
  return (
    <Dialog
      onClose={() => setModalIsOpen(false)}
      open={modalIsOpen}
      fullWidth
      maxWidth={"lg"}
    >
      <DialogTitle>Applied Tag Filter</DialogTitle>
      <DialogContent>
        <Grid2 container>
          {compColList.map((_val, i) => {
            return (
              <Grid2 key={i}>
                <ListItem>
                  <FormGroup>{compColList[i]}</FormGroup>
                </ListItem>
              </Grid2>
            );
          })}
        </Grid2>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setModalIsOpen(false)}
          color="primary"
          variant="contained"
        >
          exit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
