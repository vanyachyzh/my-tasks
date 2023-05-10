import { TextField } from "@mui/material";
import './WorkSpace.scss'

type Props = {
  title: string,
  body: string,
};


export const WorkSpace = () => (
  <div className="work-space">
    <span className="work-space__date">30.20.30</span>

    <input
      className="work-space__title"
      type="text"
      placeholder="Title"
    />

    <textarea
      className="work-space__body"
      placeholder="Text"
    >

    </textarea>
  </div>
);