import { TextField } from "@mui/material";
import './WorkSpace.scss'

type Props = {
  title: string,
  body: string,
};


export const WorkSpace: React.FC<Props> = ({ title, body }) => (
  <div className="work-space">
    <TextField
      label="Заголовок"
      variant="outlined"
      sx={{
        width: "100%",
        marginBottom: "10px"
      }}
    />

    <TextField
      label="Завдання"
      multiline
      inputProps={{ style: { height: "200px" } }}
      sx={{ width: "100%" }}
    />
  </div>
);