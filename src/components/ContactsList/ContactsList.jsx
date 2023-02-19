import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, filter, deleteContact }) => {
  return (
    <ul>
      <li>
        {contacts.map((contact) => {
          const name = contact.name.toLowerCase();
          const number = contact.number;
          const search = filter.toLowerCase();
          if (name.includes(search) || number.includes(search))
            return (
              <ContactsListItem
                key={contacts.id}
                contact={contact}
                deleteContact={() => deleteContact(contact.id)}
              />
                else
            return null;
             
        })}
      </li>
     
    </ul>
  );
};

ContactsList.propTypes = {
  contacts:
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number:PropTypes.string.isRequired
    })).isRequired,
  filter: PropTypes.string,
  deleteContact:PropTypes.func.isRequired,
  
}