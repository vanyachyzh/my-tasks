import { useState } from "react";
import { Color } from "../../types/Color";
import { CloseIcon, DeleteIcon, EditIcon, PlusIcon } from "../Icon/Icon";
import './Button.scss';

type Props = {
  type: 'edit' | 'add' | 'delete' | 'close',
};

export const Button: React.FC<Props> = ({ type }) => {
  const [color, setColor] = useState(Color.Default);

  return (
    <button
      onMouseEnter={() => setColor(Color.Hover)}
      onMouseLeave={() => setColor(Color.Default)}
      className="button"
      style={{ width: type === 'close' ? '30px' : '50px'}}
    >
      {type === 'add' && <PlusIcon status={color} />}
      {type === 'edit' && <EditIcon status={color} />}
      {type === 'delete' && <DeleteIcon status={color} />}
      {type === 'close' && <CloseIcon status={color} />}
    </button>
  )
};
