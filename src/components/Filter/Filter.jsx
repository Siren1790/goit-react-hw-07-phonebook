import {FilterSection, Label, Input} from './Filter.module'
import { useDispatch } from 'react-redux';
import {setFilter} from '../../redux/filterSlice.js'

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterSection>
    <Label>
      Filter contact by Name
      <Input type="text" onChange={(event)=> dispatch(setFilter(event.target.value))} />
    </Label>
    </FilterSection>
  );
};
