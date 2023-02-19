import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <span>
        {contact.name}:{contact.number}
      </span>
      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
