import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search..."
      />
    </>
  );
};
