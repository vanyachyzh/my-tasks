import { Button, Typography } from "@mui/material";
import { TaskInfo } from "../../types/TaskInfo";

type Props = {
  task: TaskInfo,
}

export const Task: React.FC<Props> = ({ task }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        width: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <Typography
        variant="h5"
        align="left"
      >
        {task.title}
      </Typography>

      <Typography
        variant="subtitle1"
        align="left"
      >
        {task.body}
      </Typography>

      <Typography
        variant="body2"
        align="left"
      >
        {task.date}
      </Typography>
    </Button>
  )
};