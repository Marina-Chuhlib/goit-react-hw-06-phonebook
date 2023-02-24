import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.title}>
      Find contact by name
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
