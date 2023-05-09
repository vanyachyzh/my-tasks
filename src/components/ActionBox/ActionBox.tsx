import { Button, TextField } from "@mui/material";
import './ActionBox.scss';

export const ActionBox = () => {
  return (
    <div className="action-box">
      <div className="action-box__buttons">
        <Button
          variant="contained"
          color="success"
          size="large"
        >
          Додати
        </Button>

        <Button
          variant="contained"
          color="error"
          size="large"
        >
          Видалити
        </Button>

        <Button
          variant="contained"
          color="warning"
          size="large"
        >
          Редагувати
        </Button>
      </div>
      <TextField
        id="outlined-basic"
        label="Шукати"
        variant="outlined"
      />
    </div>
  )
};
