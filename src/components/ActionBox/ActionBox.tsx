import { Button } from '../Button/Button';
import './ActionBox.scss';

export const ActionBox = () => {
  return (
    <div className="action-box">
      <div className='action-box__buttons'>
        <Button type="add" />
        <Button type="edit" />
        <Button type="delete" />
      </div>

      <input
        className='action-box__input'
        type="text"
        placeholder='Search'
      />
    </div>
  )
};
