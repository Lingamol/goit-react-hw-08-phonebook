// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FilterInputLabel, FilterInput } from './Filter.Styled';
// import { setFilter } from 'redux/actions';
import { setFilter } from 'redux/filters/filtersSlice';
import { selectFilter } from 'redux/filters/selectors';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onFilterChange = value => dispatch(setFilter(value));
  return (
    <FilterInputLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        onChange={event => {
          onFilterChange(event.target.value);
        }}
        value={filter}
      />
    </FilterInputLabel>
  );
};
export default Filter;

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onFilterContact: PropTypes.func.isRequired,
// };
