import PropTypes from 'prop-types';

export const Filter = ({ filter, filterContact }) => {
  const handleChange = event => {
    const { value } = event.currentTarget;
    filterContact(value);
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
