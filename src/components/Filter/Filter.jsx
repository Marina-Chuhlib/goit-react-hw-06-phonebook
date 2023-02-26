import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

import css from '../Filter/Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  // console.log(filter);

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <label className={css.title}>
      Find contact by name
      <input
        type="text"
        className={css.input}
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};

export default Filter;
