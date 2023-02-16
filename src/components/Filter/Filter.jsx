import { useSelector, useDispatch } from 'react-redux';
import { namesFilter } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/filter/filter-selectors';
import { LabelFilterStyled, InputFilterStyled } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  return (
    <LabelFilterStyled>
      Find contacts by name
      <InputFilterStyled
        type="text"
        name="filter"
        value={filter}
        onChange={event => dispatch(namesFilter(event.currentTarget.value))}
      />
    </LabelFilterStyled>
  );
};
