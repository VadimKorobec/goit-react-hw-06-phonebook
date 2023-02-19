import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export const ContactsListItem = ({ contact, deleteContact }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {};
  return (
    <div>
      <li>
        <span>
          {contact.name}:{contact.number}
        </span>
        <button type="button" onClick={deleteContact}>
          Delete
        </button>
      </li>
    </div>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
